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
    public async disassociate(input: inputRawRelation): Promise<void>{
        try {
            await this.getConnection().raw(`
            DELETE FROM ${this.tableNames.RelationTable} WHERE fk_laboratory='${input.id_laboratory}' AND fk_exam='${input.id_exam}';
            `)
        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}