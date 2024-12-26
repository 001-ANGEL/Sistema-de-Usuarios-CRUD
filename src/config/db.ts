import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config()

const dbName = process.env.DATABASE_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

if (!dbName || !dbUser || !dbPassword) {
  throw new Error("Faltan las variables de entorno para la conexion de la DB");
}

//Quitar loggin para ver los loggs en consola
const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: "postgres",
  host: "localhost",
  logging: false
});

export default sequelize;
