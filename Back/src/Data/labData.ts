import { InputComplete } from "../Entities/Lab";
import { BaseDatabase } from "./BaseDatabase";

export class LabDatabase extends BaseDatabase {
    public async labSignup(input: InputComplete): Promise<void> {
            try {
                await this.getConnection().raw(`
                INSERT INTO ${this.tableNames.LabTable} (id, nome, endereco)
                VALUES ("${input.id}", "${input.nome}", "${input.endereco}");
                `)
                
            } catch (error) {
                throw new Error(error.sqlMessage || error.message)
            }
    } 


}