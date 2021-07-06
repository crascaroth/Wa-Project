import { IdGenerator } from "../Services/IdGenerator";
import { ExamDatabase } from "../Data/examDatabase";
import { InputComplete, InputRaw } from "../Entities/Lab";

export class ExamBusiness {
  constructor(
    private examDatabase: ExamDatabase,
    private idGenerator: IdGenerator
  ) {}

  public async signupExam(inputRaw: InputRaw): Promise<void> {
    if (![inputRaw.nome, inputRaw.endereco]) {
      throw new Error("Please insert a Valid Name or Address");
    }

    const id = this.idGenerator.generateId();

    const inputComplete: InputComplete = {
        id,
        nome: inputRaw.nome, 
        endereco: inputRaw.endereco
    }

    await this.examDatabase.signupExam(inputComplete)
    
}

    public async getAllExams(): Promise<object | null> {
      const result = await this.examDatabase.getAllExams();
    
      if(!result[0]){
        return null
      }
      else {
        return result[0];
      }
    }
}
