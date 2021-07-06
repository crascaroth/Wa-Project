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
exports.LabBusiness = void 0;
class LabBusiness {
    constructor(labDatabase, idGenerator) {
        this.labDatabase = labDatabase;
        this.idGenerator = idGenerator;
    }
    labSignup(inputRaw) {
        return __awaiter(this, void 0, void 0, function* () {
            if (![inputRaw.nome, inputRaw.endereco]) {
                throw new Error("Please insert a Valid Name or Address");
            }
            const id = this.idGenerator.generateId();
            const inputComplete = {
                id,
                nome: inputRaw.nome,
                endereco: inputRaw.endereco,
            };
            yield this.labDatabase.labSignup(inputComplete);
        });
    }
    getAllLabs() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.labDatabase.getAllLabs();
            if (!result[0]) {
                return null;
            }
            else {
                return result[0];
            }
        });
    }
}
exports.LabBusiness = LabBusiness;
//# sourceMappingURL=labBusiness.js.map