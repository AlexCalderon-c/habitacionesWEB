import {Router} from 'express'
import {obtenerUsuario, obtenerUsuarioId, crearUsuario, actualizarUsuario, eliminarUsuario, registerUsuario, loginUsuario} from '../controllers/users.controllers.js'

const router = Router()

router.get('/auth/register', registerUsuario)
router.get('/auth/login', loginUsuario)


router.get('/users', obtenerUsuario)

router.get('/users/:id', obtenerUsuarioId)

router.post('/users', crearUsuario)

router.delete('/users/:id', eliminarUsuario)

router.put('/users/:id', actualizarUsuario)

export default router