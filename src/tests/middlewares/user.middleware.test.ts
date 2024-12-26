import { Request, Response, NextFunction } from "express";
import * as userMiddleware from "../../middlewares/user.middleware";
import User from "../../models/user";

jest.mock("../../models/user");

// validateUserFields
describe("Middleware: validateUserFields", () => {
  test("Debe retornar 400 si faltan los campos name o email", () => {
    const req = {
      body: { name: "", email: "", age: 20 },
      params: {},
    } as unknown as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;
    const next = jest.fn();

    userMiddleware.validateUserFields(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      message: "Los campos name y email son obligatorios",
    });
  });
});

// validateEmail
describe("Middleware: validateEmail", () => {
  test("Debe retornar 400 si el email es invalido", () => {
    const req = {
      body: { email: "invalid-email" },
      params: {},
    } as unknown as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;
    const next = jest.fn();

    userMiddleware.validateEmail(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: "El email es invalido" });
  });
});

//existsEmail
describe("Middleware: existsEmail", () => {
  test("Debe retornar 409 si el email ya existe", async () => {
    const req = {
      body: { email: "juan@correo.com" },
      params: {},
    } as unknown as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;
    const next = jest.fn();

    (User.findOne as jest.Mock).mockResolvedValueOnce({});

    await userMiddleware.existsEmail(req, res, next);

    expect(res.status).toHaveBeenCalledWith(409);
    expect(res.json).toHaveBeenCalledWith({
      message: "El correo ya está registrado.",
    });
  });
});

//  validateID
describe("Middleware: validateID", () => {
  test("Debe retornar 400 si el id es invalido", async () => {
    const req = { params: { id: "invalid-id" } } as unknown as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;
    const next = jest.fn();

    await userMiddleware.validateID(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: "ID no valido" });
  });
});
