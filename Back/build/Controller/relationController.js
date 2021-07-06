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
exports.RelationController = void 0;
const relationBusiness_1 = require("../Business/relationBusiness");
const BaseDatabase_1 = require("../Data/BaseDatabase");
const examDatabase_1 = require("../Data/examDatabase");
const labDatabase_1 = require("../Data/labDatabase");
const relationDatabase_1 = require("../Data/relationDatabase");
class RelationController {
    associate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const input = {
                    id_laboratory: req.body.id_laboratory,
                    id_exam: req.body.id_exam,
                };
                const relationBusiness = new relationBusiness_1.RelationBusiness(new examDatabase_1.ExamDatabase, new labDatabase_1.LabDatabase, new relationDatabase_1.RelationDatabase);
                yield relationBusiness.associate(input);
                res.status(201).send("Association Created Sucessfully");
            }
            catch (error) {
                res.status(400).send({ error: error.message });
            }
            yield BaseDatabase_1.BaseDatabase.destroyConnection();
        });
    }
}
exports.RelationController = RelationController;
//# sourceMappingURL=relationController.js.map