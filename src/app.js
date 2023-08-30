//importamos desde babel
import express from 'express'
import morgan from 'morgan'

import IndexRoutes from './routes'
const app = express()

//configuramos en una variable el puerto del server
app.set('port', process.env.PORT || 3000)

//middleware
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req,res)=>{
    res.json({message: 'Bienvenido a mi API'})
})

app.use('/',IndexRoutes)


export default app;