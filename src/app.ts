import express from "express";
import dotenv from "dotenv";
import sequelize from "./models/user";
import usersRoutes from './routes/user.routes'

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());
app.use(usersRoutes)


sequelize.sync({ alter: true }).then(() => {
    console.log("La base de datos ha sido sincronizada.");
  }).catch((error) => {
    console.error("Error al sincronizar la base de datos:", error);
  });

app.get('/', (req, res) => {
    res.send('Server running')
})

app.listen(port, () => {
    console.log(` Server running in port  ${port} `);
})

//Exportacion para la pruebas
export default app;