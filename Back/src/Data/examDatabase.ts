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
  
  public async getAllExams(): Promise<object[]>{
      try {
          return await this.getConnection().raw(`
          SELECT * FROM ${this.tableNames.ExamTable};
          `)
      } catch (error) {
        throw new Error(error.sqlMessage || error.message);
      }
  }

  public async getActiveExams(): Promise<object[]>{
    try {
      return await this.getConnection().raw(`
      SELECT * FROM ${this.tableNames.LabTable}
      WHERE status = 1;
      `)
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

}
