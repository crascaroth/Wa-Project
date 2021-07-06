import { IdGenerator } from "../Services/IdGenerator";
import { LabDatabase } from "../Data/labDatabase";
import { InputCompleteLab, InputRawLab } from "../Entities/Lab";

export class LabBusiness {
  constructor(
    private labDatabase: LabDatabase,
    private idGenerator: IdGenerator
  ) {}

  public async labSignup(inputRaw: InputRawLab): Promise<void> {
    if (![inputRaw.nome, inputRaw.endereco]) {
      throw new Error("Please insert a Valid Name or Address");
    }

    const id = this.idGenerator.generateId();

    const inputComplete: InputCompleteLab = {
      id,
      nome: inputRaw.nome,
      endereco: inputRaw.endereco,
    };
    await this.labDatabase.labSignup(inputComplete);
  }

  public async getAllLabs(): Promise<object | null> {
    const result = await this.labDatabase.getAllLabs();
    
    if(!result[0]){
      return null
    }
    else {
      return result[0];
    }
  }

  public async getActiveLabs(): Promise<object | null> {
    const result = await this.labDatabase.getActiveLabs();
    if(!result[0]){
      return null
    }
    else {
      return result[0];
    }
  }
}
