import {Router} from 'express'
import {obtenerUsuario, obtenerUsuarioId, crearUsuario, actualizarUsuario, eliminarUsuario} from '../controllers/users.controllers.js'

const router = Router()

router.get('/users', obtenerUsuario)

router.get('/users/:id', obtenerUsuarioId)

router.post('/users', crearUsuario)

router.delete('/users/:id', eliminarUsuario)

router.put('/users/:id', actualizarUsuario)

export default router