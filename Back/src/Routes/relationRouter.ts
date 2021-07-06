import express from "express";
import { RelationController } from "../Controller/relationController";

export const relationRouter = express.Router();

const relationController = new RelationController();

relationRouter.put('/associate', relationController.associate)