import express, { Express} from "express";
import {labRouter} from "./Routes/labRouter";


import server from "./Services/Server";

server()
const app: Express = express()
app.use("/user", labRouter);
