import {pool} from '../db.js';

export const obtenerReserva = async (req, res) => {
    const {rows} = await pool.query("SELECT * FROM reservas")
    return res.json(rows)
};

export const obtenerReservaPorId = async (req, res) => {
    const {id} = req.params
    const {rows} = await pool.query("SELECT * FROM reservas WHERE id = $1", [id])
    return res.json(rows)
};

export const crearReserva = async (req, res) => {
    const data = req.body;
    const {rows} = await pool.query("INSERT INTO reservas (usuario_id, habitacion_id, fecha_inicio, fecha_fin, estado) VALUES ($1, $2, $3, $4, $5) RETURNING *", [data.usuario_id, data.habitacion_id, data.fecha_inicio, data.fecha_fin, data.estado])
    return res.json(rows)
}

export const actualizarReserva = async (req, res) => {
    const {id} = req.params
    const data = req.body
    const {rows} = await pool.query("UPDATE reservas SET usuario_id=$1, habitacion_id=$2, fecha_inicio=$3, fecha_fin=$4, estado=$5 WHERE id=$6 RETURNING *", [data.usuario_id, data.habitacion_id, data.fecha_inicio, data.fecha_fin, data.estado, id])
    return res.json(rows)
}

export const eliminarReserva = async (req, res) => {
    const {id} = req.params
    const {rows} = await pool.query("DELETE FROM reservas WHERE id=$1 RETURNING *", [id])
    return res.json(rows)
}

