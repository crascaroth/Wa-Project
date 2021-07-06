"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationDatabase = void 0;
const BaseDatabase_1 = require("./BaseDatabase");
class RelationDatabase extends BaseDatabase_1.BaseDatabase {
    associate(input) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.getConnection().raw(`
            INSERT INTO ${this.tableNames.RelationTable} (fk_exam, fk_laboratory)
            VALUES ('${input.id_exam}', '${input.id_laboratory}')
            `);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    disassociate(input) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.getConnection().raw(`
            DELETE FROM ${this.tableNames.RelationTable} WHERE fk_laboratory='${input.id_laboratory}' AND fk_exam='${input.id_exam}';
            `);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
}
exports.RelationDatabase = RelationDatabase;
//# sourceMappingURL=relationDatabase.js.map