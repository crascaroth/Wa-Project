import { inputRawRelation } from "../Entities/Relation";
import { BaseDatabase } from "./BaseDatabase";

export class RelationDatabase extends BaseDatabase {
    public async associate(input: inputRawRelation): Promise<void>{
        try {
            await this.getConnection().raw(`
            INSERT INTO ${this.tableNames.RelationTable} (fk_exam, fk_laboratory)
            VALUES ('${input.id_exam}', '${input.id_laboratory}')
            `)
        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}