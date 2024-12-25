import User from "../models/user";

interface userDB {
  name: string;
  email: string;
  age?: number;
}

export const createUserInDB = async ({ name, email, age }: userDB) => {
  try {
    const createUser = await User.create({ name, email, age });
    return createUser;
  } catch (error) {
    throw new Error("Error al crear al usuario en la DB" + error);
  }
};

export const findAllUsers = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    throw new Error("Error al obtener los usuarios" + error);
  }
};

export const findUserById = async (id: number) => {
  try {
    const user = await User.findByPk(id);

    if (!user) {
      throw new Error("Usuario no encontrado");
    }
    return user;
  } catch (error) {
    throw new Error("Error al obtner el usuario" + error);
  }
};

export const updateUserInDB = async (
  id: number,
  updateUser: { name: string; email: string; age?: number }
) => {
  try {
    const user = await User.findByPk(id);

    if (!user) {
      throw new Error("Usuario no encontrado");
    }

    //Retornar usuario
    await user.update(updateUser);
    return user;
  } catch (error) {
    throw new Error("Error al actualizar un usuario" + error);
  }
};

export const deleteUserInDB = async (id: number) => {
  try {
    const idUser = await User.findByPk(id);

    if (!idUser) {
      throw new Error("Usuario no encontrado"); 
    }

    // Elimina al usuario encontrado
    await idUser.destroy();
    return idUser;
  } catch (error) {
    throw new Error("Error al eliminar el usuario: " + error);
  }
};
