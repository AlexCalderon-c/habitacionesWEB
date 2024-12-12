import {Router} from 'express';
import {obtenerReserva, obtenerReservaPorId, crearReserva, actualizarReserva, eliminarReserva} from '../controllers/reservas.controllers.js';

const router = Router();

router.get('/reserva', obtenerReserva)
router.get('/reserva/:id', obtenerReservaPorId)
router.post('/reserva', crearReserva)
router.put('/reserva/:id', actualizarReserva)
router.delete('/reserva/:id', eliminarReserva)

export default router;