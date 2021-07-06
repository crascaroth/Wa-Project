import { Request, Response } from "express";
import { ExamBusiness } from "../Business/examBusiness";
import { BaseDatabase } from "../Data/BaseDatabase";
import { ExamDatabase } from "../Data/examDatabase";
import { inputRawEditExam, InputRawExam } from "../Entities/Exam";
import { IdGenerator } from "../Services/IdGenerator";

export class ExamController {
  async signupExam(req: Request, res: Response) {
    try {
      const inputRaw: InputRawExam = {
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

  async getActiveExams(req:Request, res:Response){
    try {
      const examBusiness = new ExamBusiness(
        new ExamDatabase(),
        new IdGenerator()
      );
  
      const exams = await examBusiness.getActiveExams();
  
      res.status(200).send({ ActiveExams: exams})
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
    await BaseDatabase.destroyConnection();
  }

  async updateExam(req: Request, res: Response){
    try {

      const inputRaw: inputRawEditExam = {
        id: req.params.id,
        nome: req.body.nome, 
        endereco: req.body.endereco
      }
      const examBusiness = new ExamBusiness(
        new ExamDatabase(),
        new IdGenerator()
      );
  
      await examBusiness.updateExam(inputRaw);
        res.status(200).send(`id: ${req.params.id} Editted Sucessfully`)
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
    await BaseDatabase.destroyConnection();
  }
}
