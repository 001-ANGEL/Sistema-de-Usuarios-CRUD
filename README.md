# Sistema de Usuarios - CRUD

Este es un sistema de gestión de usuarios utilizando **TypeScript**, **Node.js**, **Express** y **PostgreSQL**. Este proyecto incluye funcionalidades para crear, leer, actualizar y eliminar usuarios en una base de datos, junto con sus manejos de errores.

## Requisitos

Antes de comenzar, asegúrate de tener instalados los siguientes requisitos:

- [Node.js](https://nodejs.org/) (v14 o superior)
- [PostgreSQL](https://www.postgresql.org/) (v12 o superior)

## Instalación

1. Clona este repositorio en tu máquina local:

   ```
   git clone https://github.com/001-ANGEL/Sistema-de-Usuarios-CRUD.git

   ```

2. Ingresa al directorio del proyecto:

   ```
   cd Sistema-de-Usuarios-CRUD

   ```

3. Instala las dependencias del proyecto:

   ```
   npm install

   ```

4. Configura la base de datos PostgreSQL:

   - Descarga "usuario.sql", que esta en este mismo repositorio en la carpeta "Database".

   - Ejecuta el script con postgreSQL

5. Crea un archivo .env en la raiz del proyecto

   ```
   DB_USER=tu_usuario

   DB_PASSWORD=tu_contraseña

   DATABASE_NAME=usuarios_db
   ```

# Ejecucion

Ejecuta uno de los 3 comandos

- **`npm run dev`**: Usa `nodemon` para detectar cambios en tiempo real.

- **`npm run build`**: Realiza la compilación del código TypeScript a JavaScript para su ejecución en producción.

- **`npm start`**: Ejecuta la aplicación en modo producción tras compilarla (si es necesario).


# Ejecucion

Ejecuta uno de los 3 comandos

- **`npm run dev`**: Usa `nodemon` para detectar cambios en tiempo real.

- **`npm run build`**: Realiza la compilación del código TypeScript a JavaScript para su ejecución en producción.

- **`npm start`**: Ejecuta la aplicación en modo producción tras compilarla (si es necesario).


El servidor usará el puerto **3000**, accesible en: http://localhost:3000/users.

# Ejecucion Para Tests

Ejecuta uno de los 3 comandos

- **`npm run test`**: Ejecuta las pruebas con Jest.
  
- **`npm run test:watch`**: Ejecuta Jest en modo observación en modo desarrollo.

- **`npm run test:coverage`**: Ejecuta las pruebas con Jest y genera un informe de cobertura de código.


## Endpoints

Prueba los Endpoints con Postman o con cualquier otra herramienta

### **Crear Usuario**
- **Método**: POST

- **URL**: http://localhost:3000/users

        {

            "name": "Juan",
            "email": "juan@example.com",
            "age": 25
        }

### **Obtner todos los Usuarios**

- **Método**: GET
- **URL**: http://localhost:3000/users
- **Ejemplo**: http://localhost:3000/users

#### **Obtner Usuario por su ID**:
- **Método**: GET
- **URL**: http://localhost:3000/users/{id}
- **Ejemplo**: http://localhost:3000/users/1


### **Actualizar Usuario**:
- **Método**: PUT
- **URL**: http://localhost:3000/users/{id}

        {

            "name": "Juan Hernandez",
            "email": "juanhernandez@gmail.com",
            "age": 36
        }


### **Eliminar Usuario**:
- **Método**: DELETE
- **URL**: http://localhost:3000/users/{id}
- **Ejemplo**: http://localhost:3000/users/1