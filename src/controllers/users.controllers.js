import { pool } from "../db.js";

export const obtenerUsuario = async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM usuarios");
  res.json(rows);
};

export const obtenerUsuarioId = async (req, res) => {
  const { id } = req.params; //PERMITE HACER UN REQUEST AL ID QUE TENGA EL USUARIO EN /users/:id
  const { rows } = await pool.query("SELECT * FROM usuarios WHERE id = $1", [
    id,
  ]); //HACE USO DEL ID, $1 PERMITE GENERAR UN TEMPLATE EN DONDE IRÁ EL VALOR, COMO ID ESTA EN UN ARRAY (INDEX 0), ENTONCES SE USARÁ ESTE ID

  if (rows.length == 0) {
    return res.status(404).json({ message: "User not found" }); //SI NO ENCUENTRA EL USUARIO, RETORNA UN STATUS 404 CON UN MENSAJE DE ERROR
  }
  res.json(rows);
};

export const crearUsuario = async (req, res) => {
  try {
    const data = req.body; //Permite operar con archivos json
    const { rows } = await pool.query(
      "INSERT INTO usuarios (nombre, email, clave, rol) VALUES ($1, $2, $3, $4) RETURNING *",
      [data.nombre, data.email, data.clave, data.rol]
    );
    return res.send(rows);
  } catch (e) {
    if(e?.code === "23505"){
        return res.status(409).json({ message: "Email already exists" }); //SI EL EMAIL YA EXISTE, RETORNA UN STATUS 409 CON UN MENSAJE DE ERROR
    }
    return res.status(500).json({ message: "Server Error" }); //SI HAY UN ERROR, RETORNA UN STATUS 500 CON UN MENSAJE DE ERROR
  }
};

export const actualizarUsuario = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  const { rows } = await pool.query(
    "UPDATE usuarios SET nombre = $1, email = $2, clave = $3, rol = $4 WHERE id = $5 RETURNING *",
    [data.nombre, data.email, data.clave, data.rol, id]
  );
  return res.send(rows);
};

export const eliminarUsuario = async (req, res) => {
  const { id } = req.params;
  const { rowCount } = await pool.query(
    "DELETE FROM usuarios WHERE id = $1 RETURNING *",
    [id]
  ); //EL PARAMETRO ROWCOUNT PERMITE VER CUANTAS FILAS SE HAN BORRADO, SI ES 0, ES PORQUE NO ENCONTRÓ NADA

  if (rowCount === 0) {
    return res.status(404).json({ message: "User not found" });
  }

  return res.sendStatus(204);
};
