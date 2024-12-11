import { pool } from '../db.js'

export const obtenerHabitacion = async (req, res) => {
    const {rows} = await pool.query("SELECT * FROM habitaciones")
    return res.json(rows)
}

export const obtenerHabitacionPorId = async (req, res) => {
    const {id} = req.params
    const {rows} = await pool.query("SELECT * FROM habitaciones WHERE id = $1", [id])
    return res.json(rows)
}

export const crearHabitacion = async (req, res) => {
    const data = req.body
    const {rows} = await pool.query("INSERT INTO habitaciones (numero_habitacion, tipo, precio, estado) VALUES ($1, $2, $3, $4) RETURNING *", [data.numero_habitacion, data.tipo, data.precio, data.estado])
    return res.json(rows)
}

export const actualizarHabitacion = async (req, res) => {
    const {id} = req.params
    const data = req.body
    const {rows} = await pool.query("UPDATE habitaciones SET numero_habitacion=$1, tipo=$2, precio=$3, estado=$4 WHERE id=$5 RETURNING *", [data.numero_habitacion, data.tipo, data.precio, data.estado, id])
    return res.json(rows)
}

export const eliminarHabitacion = async (req, res) => {
    const {id} = req.params
    const {rows} = await pool.query("DELETE FROM habitaciones WHERE id=$1 RETURNING *", [id])
    return res.json(rows)
}