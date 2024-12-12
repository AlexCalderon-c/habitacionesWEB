import {Router} from 'express'
import {obtenerHabitacion, obtenerHabitacionPorId, crearHabitacion, actualizarHabitacion, eliminarHabitacion} from '../controllers/habitaciones.controllers.js'

const router = Router()

router.get('/habitaciones', obtenerHabitacion)

router.get('/habitaciones/:id', obtenerHabitacionPorId)

router.post('/habitaciones', crearHabitacion)

router.put('/habitaciones/:id', actualizarHabitacion)

router.delete('/habitaciones/:id', eliminarHabitacion)

export default router;