import pgk from 'pg'
import dotenv from "dotenv"
const {Pool} = pgk
dotenv.config()

const pool = new Pool({
    host: process.env.POSTGRE_HOST,
    port: process.env.POSTGRE_PORT,
    database: process.env.POSTGRE_DATABASE,
    user: process.env.POSTGRE_USER,
    password: process.env.POSTGRE_PASSWORD
})

export const createTable = async () => {
    return await pool.query('CREATE TABLE IF NOT EXISTS product(id SERIAL PRIMARY KEY, title TEXt, price INT)')
}

export default pool;