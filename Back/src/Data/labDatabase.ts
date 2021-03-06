import { InputCompleteLab, inputRawEditLab, RequestCompleteLab } from "../Entities/Lab";
import { BaseDatabase } from "./BaseDatabase";

export class LabDatabase extends BaseDatabase {
  public async labSignup(input: InputCompleteLab): Promise<void> {
    try {
      await this.getConnection().raw(`
                INSERT INTO ${this.tableNames.LabTable} (id, nome, endereco, status)
                VALUES ("${input.id}", "${input.nome}", "${input.endereco}", 1);
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

  public async getActiveLabs(): Promise<object[]> {
    try {
      return await this.getConnection().raw(`
      SELECT * FROM ${this.tableNames.LabTable}
      WHERE status = 1;
      `);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async updateLaboratory(input: inputRawEditLab): Promise<void> {
    try {
      if (input.nome && input.endereco) {
        await this.getConnection().raw(`
      UPDATE ${this.tableNames.LabTable}
      SET nome='${input.nome}', endereco='${input.endereco}'
      WHERE id='${input.id}';
      `);
      } else if (input.nome && !input.endereco) {
        await this.getConnection().raw(`
      UPDATE ${this.tableNames.LabTable}
      SET nome='${input.nome}'
      WHERE id='${input.id}';
      `);
      } else if (!input.nome && input.endereco) {
        await this.getConnection().raw(`
      UPDATE ${this.tableNames.LabTable}
      SET endereco='${input.endereco}'
      WHERE id='${input.id}';
      `);
      } else {
        throw new Error("Nothing to edit");
      }
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async deleteLaboratory(id: string): Promise<void> {
    try {
      await this.getConnection().raw(`
      DELETE FROM ${this.tableNames.LabTable} WHERE id='${id}';
      `);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getLabById(id: string): Promise<RequestCompleteLab>{
    try {
      const result = await this.getConnection().raw(`
      SELECT * FROM ${this.tableNames.LabTable} WHERE id='${id}';
      `)
      return result[0][0]
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
