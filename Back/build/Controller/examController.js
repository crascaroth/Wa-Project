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
exports.ExamController = void 0;
const examBusiness_1 = require("../Business/examBusiness");
const BaseDatabase_1 = require("../Data/BaseDatabase");
const examDatabase_1 = require("../Data/examDatabase");
const IdGenerator_1 = require("../Services/IdGenerator");
class ExamController {
    signupExam(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const inputRaw = {
                    nome: req.body.nome,
                    tipo: req.body.tipo,
                };
                const examBusiness = new examBusiness_1.ExamBusiness(new examDatabase_1.ExamDatabase(), new IdGenerator_1.IdGenerator());
                yield examBusiness.signupExam(inputRaw);
                res.status(201).send("Exam Created Sucessfully.");
            }
            catch (error) {
                res.status(400).send({ error: error.message });
            }
            yield BaseDatabase_1.BaseDatabase.destroyConnection();
        });
    }
    getAllExams(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const examBusiness = new examBusiness_1.ExamBusiness(new examDatabase_1.ExamDatabase(), new IdGenerator_1.IdGenerator());
            const exams = yield examBusiness.getAllExams();
            res.status(200).send({ Exams: exams });
        });
    }
    getActiveExams(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const examBusiness = new examBusiness_1.ExamBusiness(new examDatabase_1.ExamDatabase(), new IdGenerator_1.IdGenerator());
                const exams = yield examBusiness.getActiveExams();
                res.status(200).send({ ActiveExams: exams });
            }
            catch (error) {
                res.status(400).send({ error: error.message });
            }
            yield BaseDatabase_1.BaseDatabase.destroyConnection();
        });
    }
    updateExam(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const inputRaw = {
                    id: req.params.id,
                    nome: req.body.nome,
                    tipo: req.body.tipo
                };
                const examBusiness = new examBusiness_1.ExamBusiness(new examDatabase_1.ExamDatabase(), new IdGenerator_1.IdGenerator());
                yield examBusiness.updateExam(inputRaw);
                res.status(200).send(`id: ${req.params.id} Editted Sucessfully`);
            }
            catch (error) {
                res.status(400).send({ error: error.message });
            }
            yield BaseDatabase_1.BaseDatabase.destroyConnection();
        });
    }
    deleteExam(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const inputId = req.params.id;
                const labBusiness = new examBusiness_1.ExamBusiness(new examDatabase_1.ExamDatabase(), new IdGenerator_1.IdGenerator());
                yield labBusiness.deleteExam(inputId);
                res.status(200).send(`id: ${req.params.id} Removed Sucessfully`);
            }
            catch (error) {
                res.status(400).send({ error: error.message });
            }
            yield BaseDatabase_1.BaseDatabase.destroyConnection();
        });
    }
}
exports.ExamController = ExamController;
//# sourceMappingURL=examController.js.map