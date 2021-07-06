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
exports.LabController = void 0;
const labBusiness_1 = require("../Business/labBusiness");
const BaseDatabase_1 = require("../Data/BaseDatabase");
const labDatabase_1 = require("../Data/labDatabase");
const IdGenerator_1 = require("../Services/IdGenerator");
class LabController {
    signupLab(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const inputRaw = {
                    nome: req.body.nome,
                    endereco: req.body.endereco,
                };
                const labBusiness = new labBusiness_1.LabBusiness(new labDatabase_1.LabDatabase(), new IdGenerator_1.IdGenerator());
                yield labBusiness.labSignup(inputRaw);
                res.status(201).send("Laboratory Created Sucessfully.");
            }
            catch (error) {
                res.status(400).send({ error: error.message });
            }
            yield BaseDatabase_1.BaseDatabase.destroyConnection();
        });
    }
    getAllLabs(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const labBusiness = new labBusiness_1.LabBusiness(new labDatabase_1.LabDatabase(), new IdGenerator_1.IdGenerator());
                const laboratories = yield labBusiness.getAllLabs();
                res.status(200).send({ Laboratories: laboratories });
            }
            catch (error) {
                res.status(400).send({ error: error.message });
            }
            yield BaseDatabase_1.BaseDatabase.destroyConnection();
        });
    }
    getActiveLabs(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const labBusiness = new labBusiness_1.LabBusiness(new labDatabase_1.LabDatabase(), new IdGenerator_1.IdGenerator());
                const laboratories = yield labBusiness.getActiveLabs();
                res.status(200).send({ ActiveLaboratories: laboratories });
            }
            catch (error) {
                res.status(400).send({ error: error.message });
            }
            yield BaseDatabase_1.BaseDatabase.destroyConnection();
        });
    }
    updateLaboratory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const inputRaw = {
                    id: req.params.id,
                    nome: req.body.nome,
                    endereco: req.body.endereco
                };
                const labBusiness = new labBusiness_1.LabBusiness(new labDatabase_1.LabDatabase(), new IdGenerator_1.IdGenerator());
                yield labBusiness.updateLaboratory(inputRaw);
                res.status(200).send(`id: ${req.params.id} Editted Sucessfully`);
            }
            catch (error) {
                res.status(400).send({ error: error.message });
            }
            yield BaseDatabase_1.BaseDatabase.destroyConnection();
        });
    }
}
exports.LabController = LabController;
//# sourceMappingURL=labController.js.map