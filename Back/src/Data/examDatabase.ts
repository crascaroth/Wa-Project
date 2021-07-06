import { InputComplete } from "../Entities/Lab";
import { BaseDatabase } from "./BaseDatabase";

export class ExamDatabase extends BaseDatabase {
  public async signupExam(input: InputComplete): Promise<void> {
    try {
      await this.getConnection().raw(`
            INSERT INTO ${this.tableNames.ExamTable} (id, nome, endereco, status)
                VALUES ("${input.id}", "${input.nome}", "${input.endereco}", true);
            `);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
