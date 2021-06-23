import express from "express";
import { LabController } from "../Controller/labController";

export const labRouter = express.Router();

const labController = new LabController();

labRouter.post("/signup/lab", labController.signupLab)