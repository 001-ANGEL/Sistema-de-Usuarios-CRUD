-- Si la base de datos 'Usuario' ya existe, no la crea nuevamente
DROP DATABASE IF EXISTS Usuario;

-- CREACION DE LA BASE DE DATOS
CREATE DATABASE Usuario;


CREATE TABLE usuario(
id SERIAL PRIMARY KEY,
name VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL UNIQUE,
age INT CHECK (age >= 18)
);

