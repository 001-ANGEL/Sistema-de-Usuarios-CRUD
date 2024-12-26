import request from "supertest";
import app from "../../app";
import * as userService from "../../services/user.service";

jest.mock("../../services/user.service");

//Create User
describe("User Controller - createUser", () => {
  test("Deberia crear un usuario", async () => {
    const newUser = {
      name: "Juan Perez",
      email: "juanperez@gmail.com",
      age: 30,
    };

    const mockCreateUser = userService.createUserInDB as jest.Mock;

    mockCreateUser.mockResolvedValue({ id: 1, ...newUser });

    const response = await request(app).post("/users").send(newUser);

    expect(response.status).toBe(201);
    expect(response.body.message).toBe("El usuario fue creado exitosamente!");
    expect(response.body.user).toHaveProperty("id");
  });
});

//Get all Users
describe("User Controller - getAllUsers", () => {
  test("Debe de retornar todos los usuarios", async () => {
    const users = [
      { id: 1, name: "Juan Perez", email: "juanperez@gmail.com", age: 30 },
      { id: 2, name: "Maria Gomez", email: "mariagomez@gmail.com", age: 25 },
    ];

    const mockFindAllUsers = userService.findAllUsers as jest.Mock;
    mockFindAllUsers.mockResolvedValue(users);

    const response = await request(app).get("/users");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(users);
  });
});

//Get User By ID
describe("User Controller - getUserById", () => {
  test("should return a user by id", async () => {
    const user = {
      id: 1,
      name: "Juan Perez",
      email: "juanperez@gmail.com",
      age: 30,
    };

    const mockFindUserById = userService.findUserById as jest.Mock;
    mockFindUserById.mockResolvedValue(user);

    const response = await request(app).get("/users/1");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(user);
  });
});

//Update User
describe("User Controller - updateUser", () => {
  test("Debe de actualizar un usuario", async () => {
    const updatedUser = {
      id: 1,
      name: "Juan Perez",
      email: "juanperez@gmail.com",
      age: 30,
    };
    const userUpdateData = {
      name: "Juan",
      email: "juan@dominio.com",
      age: null,
    };

    const mockUpdateUserInDB = userService.updateUserInDB as jest.Mock;
    mockUpdateUserInDB.mockResolvedValue(updatedUser);

    const response = await request(app).put("/users/1").send(userUpdateData);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Usuario actualizado exitosamente");
    expect(response.body.user).toEqual(updatedUser);
  });
});

//Delete User
describe("User Controller - deleteUser", () => {
  it("Deberia eliminar un usuario por su id", async () => {
    const deletedUser = {
      id: 1,
      name: "Juan Perez",
      email: "juanperez@gmail.com",
      age: 30,
    };

    const mockDeleteUserInDB = userService.deleteUserInDB as jest.Mock;
    mockDeleteUserInDB.mockResolvedValue(deletedUser);

    const response = await request(app).delete("/users/1");

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Usuario eliminado exitosamente");
    expect(response.body.user).toEqual(deletedUser);
  });
});
