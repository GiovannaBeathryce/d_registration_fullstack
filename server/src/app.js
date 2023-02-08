import express from 'express'
import { runDatabase } from './database/database'
import LoginRoute from './routes/login.routs'
import UserRoutes from './routes/users.routs'
import ContatosRouts from './routes/contatos.routs'
const cors = require('cors')


const app = express()

app.use(express.json())
app.use(cors())

app.use('/user', UserRoutes)
app.use('/login', LoginRoute)
app.use('/contatos', ContatosRouts)


app.listen(3001, ()=>{
    console.log('rodando na porta 3001')
    runDatabase()
})