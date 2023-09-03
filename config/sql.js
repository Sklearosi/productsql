import pgk from 'pg'

const {Pool} = pgk

const pool = new Pool({
    host: "dpg-cjqd0qdhe99c73boaohg-a",
    port: 5432,
    database: "products_ql3o",
    user: "products_ql3o_user",
    password: "t2NBpPMOtkp51ajRed2EdFcQIA474PX9"
})

export const createTable = async () => {
    return await pool.query('CREATE TABLE IF NOT EXISTS product(id SERIAL PRIMARY KEY, title TEXt, price INT)')
}

export default pool;