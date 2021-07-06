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
exports.ExamDatabase = void 0;
const BaseDatabase_1 = require("./BaseDatabase");
class ExamDatabase extends BaseDatabase_1.BaseDatabase {
    signupExam(input) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.getConnection().raw(`
            INSERT INTO ${this.tableNames.ExamTable} (id, nome, endereco, status)
                VALUES ("${input.id}", "${input.nome}", "${input.endereco}", true);
            `);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    getAllExams() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.getConnection().raw(`
          SELECT * FROM ${this.tableNames.ExamTable};
          `);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    getActiveExams() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.getConnection().raw(`
      SELECT * FROM ${this.tableNames.LabTable}
      WHERE status = 1;
      `);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    updateExam(input) {
        return __awaiter(this, void 0, void 0, function* () {
            if (input.nome && input.endereco) {
                yield this.getConnection().raw(`
      UPDATE ${this.tableNames.ExamTable}
      SET nome='${input.nome}', endereco='${input.endereco}'
      WHERE id='${input.id}';
      `);
            }
            else if (input.nome && !input.endereco) {
                yield this.getConnection().raw(`
      UPDATE ${this.tableNames.ExamTable}
      SET nome='${input.nome}'
      WHERE id='${input.id}';
      `);
            }
            else if (!input.nome && input.endereco) {
                yield this.getConnection().raw(`
      UPDATE ${this.tableNames.ExamTable}
      SET endereco='${input.endereco}'
      WHERE id='${input.id}';
      `);
            }
            else {
                throw new Error("Nothing to edit");
            }
        });
    }
}
exports.ExamDatabase = ExamDatabase;
//# sourceMappingURL=examDatabase.js.map