#DATABASE POSTGRES 
-- Tabla de usuarios
CREATE TABLE usuarios (
id SERIAL PRIMARY KEY,
nombre VARCHAR(100) NOT NULL,
email VARCHAR(100) UNIQUE NOT NULL,
contraseña VARCHAR(255) NOT NULL,
rol VARCHAR(50) NOT NULL CHECK (rol IN ('cliente', 'administrador')) );

CREATE TABLE habitaciones (
id SERIAL PRIMARY KEY,
numero_habitacion INT NOT NULL UNIQUE,
tipo VARCHAR(50) NOT NULL, 
precio NUMERIC(10, 2) NOT NULL,
estado VARCHAR(50) NOT NULL CHECK (estado IN ('disponible',
'reservada')) );

CREATE TABLE reservas (
id SERIAL PRIMARY KEY,
usuario_id INT NOT NULL REFERENCES usuarios(id) ON DELETE
CASCADE,
habitacion_id INT NOT NULL REFERENCES habitaciones(id) ON DELETE
CASCADE,
fecha_inicio DATE NOT NULL,
fecha_fin DATE NOT NULL,
estado VARCHAR(50) NOT NULL CHECK (estado IN ('activa', 'cancelada'))
);


INSERT INTO usuarios (nombre, email, contraseña, rol) VALUES 
('alex', 'alex@prueba.com', 'admin', 'cliente'), 
('Daniel', 'Danie@prueba.com', 'admin', 'cliente');

INSERT INTO habitaciones (numero_habitacion, tipo, precio, estado) VALUES 
(101, 'Individual', 250.00, 'disponible'), (102, 'Individual', 30000.00, 'reservada')