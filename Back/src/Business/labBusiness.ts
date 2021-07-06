import { IdGenerator } from "../Services/IdGenerator";
import { LabDatabase } from "../Data/labData";
import { InputComplete, InputRaw } from "../Entities/Lab";

export class LabBusiness {
  constructor(
    private labDatabase: LabDatabase,
    private idGenerator: IdGenerator
  ) {}

  public async labSignup(inputRaw: InputRaw): Promise<void> {
    if (![inputRaw.nome, inputRaw.endereco]) {
      throw new Error("Please insert a Valid Name or Address");
    }

    const id = this.idGenerator.generateId();

    const inputComplete: InputComplete = {
      id,
      nome: inputRaw.nome,
      endereco: inputRaw.endereco,
    };
    await this.labDatabase.labSignup(inputComplete);
  }

  public async getAllLabs(): Promise<object[]> {
    return await this.labDatabase.getAllLabs();
  }
}
