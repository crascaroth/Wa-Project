import express from "express";
import { ExamController } from "../Controller/examController";

export const examRouter = express.Router();

const examController = new ExamController();

examRouter.post("/signup", examController.signupExam)
examRouter.get("/get/all", examController.getAllExams)
