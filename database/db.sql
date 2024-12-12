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



INSERT INTO usuarios (nombre, email, clave, rol) VALUES
('Juan Pérez', 'juan.perez@example.com', 'contraseña123', 'cliente'),
('María López', 'maria.lopez@example.com', 'contraseña456', 'cliente'),
('Carlos García', 'carlos.garcia@example.com', 'contraseña789', 'administrador');

INSERT INTO habitaciones (numero_habitacion, tipo, precio, estado) VALUES
(105, 'Individual', 50.00, 'disponible'),
(106, 'Doble', 80.00, 'disponible'),
(107, 'Suite', 120.00, 'disponible');

INSERT INTO reservas (usuario_id, habitacion_id, fecha_inicio, fecha_fin, estado) VALUES
(3, 1, '2024-12-15', '2024-12-20', 'activa'),   -- Daniel reserva habitación Individual (101)
(8, 2, '2024-12-18', '2024-12-22', 'activa'),   -- Yuli reserva habitación Individual (102)
(9, 3, '2024-12-10', '2024-12-15', 'cancelada'), -- Juan Pérez cancela su reserva en habitación Individual (105)
(16, 5, '2024-12-20', '2024-12-25', 'activa');   -- María López reserva habitación Doble (106)