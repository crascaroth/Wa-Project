import { IdGenerator } from "../Services/IdGenerator";
import { ExamDatabase } from "../Data/examDatabase";
import { InputCompleteExam, inputRawEditExam, InputRawExam } from "../Entities/Exam";

export class ExamBusiness {
  constructor(
    private examDatabase: ExamDatabase,
    private idGenerator: IdGenerator
  ) {}

  public async signupExam(inputRaw: InputRawExam): Promise<void> {
    if (![inputRaw.nome, inputRaw.tipo]) {
      throw new Error("Please insert a Valid Name or Address");
    }

    const id = this.idGenerator.generateId();

    const inputComplete: InputCompleteExam = {
      id,
      nome: inputRaw.nome,
      tipo: inputRaw.tipo,
    };

    await this.examDatabase.signupExam(inputComplete);
  }

  public async getAllExams(): Promise<object | null> {
    const result = await this.examDatabase.getAllExams();

    if (!result[0]) {
      return null;
    } else {
      return result[0];
    }
  }

  public async getActiveExams() {
    const result = await this.examDatabase.getActiveExams();

    if (!result[0]) {
      return null;
    } else {
      return result[0];
    }
  }
  
  public async updateExam(input: inputRawEditExam): Promise<void>{
    if(!input.id){
      throw new Error("Please insert a valid id");
    }

    await this.examDatabase.updateExam(input);

    
  }

  public async deleteExam(id: string):Promise<void>{
    if(!id){
      throw new Error("Please insert a valid id")
    }

    await this.examDatabase.deleteExam(id);
  }
}
