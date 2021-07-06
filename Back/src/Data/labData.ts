import { InputComplete } from "../Entities/Lab";
import { BaseDatabase } from "./BaseDatabase";

export class LabDatabase extends BaseDatabase {
  public async labSignup(input: InputComplete): Promise<void> {
    try {
      await this.getConnection().raw(`
                INSERT INTO ${this.tableNames.LabTable} (id, nome, endereco, status)
                VALUES ("${input.id}", "${input.nome}", "${input.endereco}", true);
                `);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getAllLabs(): Promise<object[]> {
    try {
      return await this.getConnection().raw(`
            SELECT * FROM ${this.tableNames.LabTable};
            `);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
