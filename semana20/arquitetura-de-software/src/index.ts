import express from 'express'
import knex from 'knex'
import cors from 'cors'
import dotenv from 'dotenv'
import { signupController } from './controller/users/signupController'
import { loginController } from './controller/users/loginController'
import { getAllUsersController } from './controller/users/getAllUsersController'


dotenv.config()

export const connection = knex({
   client: 'mysql',
   connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_SCHEMA,
      port: 3306,
      multipleStatements: true
   }
})


const app = express()
app.use(express.json())
app.use(cors())

app.get("/", async function(req,res){
   res.send(await connection.raw('show tables'))
})


app.listen(3003, () => {
   console.log('Servidor rodando na porta 3003')
})

app.post("/signup", signupController)

app.post("/login", loginController)

app.get("/all", getAllUsersController)
