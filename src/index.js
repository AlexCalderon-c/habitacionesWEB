import express from 'express'
import {PORT} from './config.js'
import userRoutes from './routes/users.routes.js'
import habitacionesRoutes from './routes/habitaciones.routes.js'
import reservasRoutes from './routes/reservas.routes.js';
import morgan from 'morgan'

const app = express();

app.listen(PORT)

app.use(morgan('dev')) //Muestra logs en consola
app.use(express.json()) //Entender datos de formato JSON
app.use(userRoutes)
app.use(habitacionesRoutes)
app.use(reservasRoutes)

console.log('Server on port', PORT)

