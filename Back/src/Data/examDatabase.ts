import { InputCompleteExam, inputRawEditExam } from "../Entities/Exam";
import { BaseDatabase } from "./BaseDatabase";

export class ExamDatabase extends BaseDatabase {
  public async signupExam(input: InputCompleteExam): Promise<void> {
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

  public async updateExam(input: inputRawEditExam): Promise<void>{
    if(input.nome && input.endereco){
      await this.getConnection().raw(`
      UPDATE ${this.tableNames.ExamTable}
      SET nome='${input.nome}', endereco='${input.endereco}'
      WHERE id='${input.id}';
      `)
    }

    else if(input.nome && !input.endereco){
      await this.getConnection().raw(`
      UPDATE ${this.tableNames.ExamTable}
      SET nome='${input.nome}'
      WHERE id='${input.id}';
      `)
    }

    else if(!input.nome && input.endereco){
      await this.getConnection().raw(`
      UPDATE ${this.tableNames.ExamTable}
      SET endereco='${input.endereco}'
      WHERE id='${input.id}';
      `)
    }
    else{
      throw new Error("Nothing to edit");
    }
  }

}
