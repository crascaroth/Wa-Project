import express, { Express} from "express";
import { examRouter } from "./Routes/examRouter";
import {labRouter} from "./Routes/labRouter";
import dotenv from "dotenv"
import cors from "cors"

import server from "./Services/Server";

dotenv.config()
const app: Express = express()
app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Server running on port 3003")
})

app.use("/laboratory", labRouter);
app.use("/exam", examRouter);
