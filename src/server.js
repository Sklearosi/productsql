import express from "express"
import { createTable } from "../config/sql.js"

const app = express()

async function init() {
    try {
        await createTable()
    } catch (error) {
        console.log(error);
    }

      function serverStart() {
        app.get('/', (request, response) => {
            return response.status(200).json((`<h1>works</h1>`))
        })
        app.listen(3000)
      }
    
}

init()