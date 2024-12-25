import { Request, Response } from "express";
import {
  findAllUsers,
  findUserById,
  createUserInDB,
  updateUserInDB,
  deleteUserInDB,
} from "../services/user.service";

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, email, age } = req.body;
    //Creacion del Usuario
    const newUser = await createUserInDB({ name, email, age });
    res.status(201).json({
      message: "El usuario fue creado exitosamente!",
      user: newUser,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al crear el usuario, revisa consola" });
    console.log(error);
  }
};

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    //Obtener a los usuarios
    const users = await findAllUsers();
    res.json(users);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "No se puede obtener los usuarios, revisa consola" });
  }
};

export const getUserById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = Number(req.params.id);

    const user = await findUserById(id);

    if (!user) {
      res.status(404).json({ message: "Usuario no encontrado" });
      return;
    }

    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Usuario no encotrado" });
  }
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = Number(req.params.id);

    const { name, email, age } = req.body;

    const updatedUser = await updateUserInDB(id, { name, email, age });

    res.status(200).json({
      message: "Usuario actualizado exitosamente",
      user: updatedUser,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "No se puedo actualizar el usuario, revisa consola" });
    console.log(error);
  }
};

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.id); 

    const deletedUser = await deleteUserInDB(id);

    res.status(200).json({
      message: "Usuario eliminado exitosamente",
      user: deletedUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "No se pudo eliminar el usuario, revisa consola",
    });
    console.log(error);
  }
};
