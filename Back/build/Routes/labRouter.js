"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.labRouter = void 0;
const express_1 = __importDefault(require("express"));
const labController_1 = require("../Controller/labController");
exports.labRouter = express_1.default.Router();
const labController = new labController_1.LabController();
exports.labRouter.post("/signup/lab", labController.signupLab);
exports.labRouter.get("/get/all/lab", labController.getAllLabs);
//# sourceMappingURL=labRouter.js.map