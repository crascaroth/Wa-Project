import { Request, Response } from "express";
import { ExamBusiness } from "../Business/examBusiness";
import { BaseDatabase } from "../Data/BaseDatabase";
import { ExamDatabase } from "../Data/examDatabase";
import { InputRaw } from "../Entities/Lab";
import { IdGenerator } from "../Services/IdGenerator";

export class ExamController {
  async signupExam(req: Request, res: Response) {
    try {
      const inputRaw: InputRaw = {
        nome: req.body.nome,
        endereco: req.body.endereco,
      };

      const examBusiness = new ExamBusiness(
        new ExamDatabase(),
        new IdGenerator()
      );

      await examBusiness.signupExam(inputRaw);

      res.status(201).send("Exam Created Sucessfully.");
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
    await BaseDatabase.destroyConnection();
  }

  async getAllExams(req: Request, res: Response) {
    const examBusiness = new ExamBusiness(
      new ExamDatabase(),
      new IdGenerator()
    );

    const exams = await examBusiness.getAllExams();

    res.status(200).send({ Exams: exams})
  }
}
