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
exports.LabDatabase = void 0;
const BaseDatabase_1 = require("./BaseDatabase");
class LabDatabase extends BaseDatabase_1.BaseDatabase {
    labSignup(input) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.getConnection().raw(`
                INSERT INTO ${this.tableNames.LabTable} (id, nome, endereco, status)
                VALUES ("${input.id}", "${input.nome}", "${input.endereco}", 1);
                `);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    getAllLabs() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.getConnection().raw(`
            SELECT * FROM ${this.tableNames.LabTable};
            `);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    getActiveLabs() {
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
    updateLaboratory(input) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (input.nome && input.endereco) {
                    yield this.getConnection().raw(`
      UPDATE ${this.tableNames.LabTable}
      SET nome='${input.nome}', endereco='${input.endereco}'
      WHERE id='${input.id}';
      `);
                }
                else if (input.nome && !input.endereco) {
                    yield this.getConnection().raw(`
      UPDATE ${this.tableNames.LabTable}
      SET nome='${input.nome}'
      WHERE id='${input.id}';
      `);
                }
                else if (!input.nome && input.endereco) {
                    yield this.getConnection().raw(`
      UPDATE ${this.tableNames.LabTable}
      SET endereco='${input.endereco}'
      WHERE id='${input.id}';
      `);
                }
                else {
                    throw new Error("Nothing to edit");
                }
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    deleteLaboratory(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.getConnection().raw(`
      DELETE FROM ${this.tableNames.LabTable} WHERE id='${id}';
      `);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    getLabById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.getConnection().raw(`
      SELECT * FROM ${this.tableNames.LabTable} WHERE id='${id}';
      `);
                return result[0][0];
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
}
exports.LabDatabase = LabDatabase;
//# sourceMappingURL=labDatabase.js.map