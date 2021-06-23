import express, { Express} from "express"
import cors from "cors"
import knex from "knex"
import dotenv from "dotenv"
import Knex from "knex"


export const server = () => {
dotenv.config()

const connection: Knex = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_SCHEMA,
      port: 3306,
      multipleStatements: true
   }
})

const app: Express = express()
app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Server running on port 3003")
 })
}
export default server