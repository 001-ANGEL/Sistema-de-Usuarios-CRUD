import { NextFunction, Request, Response } from "express";
import User from "../models/user";
import { Op } from "sequelize";

//Campos vacios
export const validateUserFields = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, email, age } = req.body;

  //Campos obligatorios
  if (!name || !email) {
    res
      .status(400)
      .json({ message: "Los campos name y email son obligatorios" });
    return;
  }

  //validacion de Age
  if (age !== null && (isNaN(age) || age < 18)) {
    res.status(400).json({ message: "La edad debe ser un número igual o mayor a 18" });
    return;
  }

  next();
};

//Email
export const validateEmail = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;

  const regex: RegExp = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  if (!regex.test(email)) {
    res.status(400).json({ message: "El email es invalido" });
    return;
  }

  next();
};

export const existsEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    const { email } = req.body;
    const userId = req.params.id;
    
    let existEmail;
    
    if (userId) {
      // Si existe un id en los parámetros (actualización)
      existEmail = await User.findOne({
        where: { email, id: { [Op.ne]: userId } },
      });
    } else {
      // Si no existe un id (creación)
      existEmail = await User.findOne({ where: { email } });
    }

  if (existEmail) {
    res.status(409).json({ message: "El correo ya está registrado." });
    return;
  }

  next();
};

//ID validos
export const validateID = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    res.status(400).json({ message: "ID no valido" });
    return;
  }

  const user = await User.findByPk(id);

  if (!user) {
    res.status(400).json({ message: "Usuario no encontrado" });
    return;
  }

  next();
};
