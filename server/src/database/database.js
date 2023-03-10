import { Client } from "pg";
import 'dotenv/config'

const database = new Client({
    user: process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    host:process.env.DB_HOST,
    database:process.env.DB_DATABASE,
    port:process.env.DB_PORT
})

export const runDatabase = async() => {
    await database.connect()
    console.log('Database connected!')
}

export default database