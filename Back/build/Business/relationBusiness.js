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
exports.RelationBusiness = void 0;
class RelationBusiness {
    constructor(examDatabase, labDatabase, relationDatabase) {
        this.examDatabase = examDatabase;
        this.labDatabase = labDatabase;
        this.relationDatabase = relationDatabase;
    }
    associate(input) {
        return __awaiter(this, void 0, void 0, function* () {
            if (![input.id_exam, input.id_laboratory]) {
                throw new Error("Please insert a valid laboratory or exam");
            }
            const exam = yield this.examDatabase.getExamById(input.id_exam);
            console.log("exam", exam);
            if (exam.status != 1) {
                throw new Error("Exam not active");
            }
            const lab = yield this.labDatabase.getLabById(input.id_laboratory);
            console.log("lab", lab);
            if (lab.status != 1) {
                throw new Error("Laboratory not active");
            }
            yield this.relationDatabase.associate(input);
        });
    }
}
exports.RelationBusiness = RelationBusiness;
//# sourceMappingURL=relationBusiness.js.map