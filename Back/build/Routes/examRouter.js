"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.examRouter = void 0;
const express_1 = __importDefault(require("express"));
const examController_1 = require("../Controller/examController");
exports.examRouter = express_1.default.Router();
const examController = new examController_1.ExamController();
exports.examRouter.post("/signup", examController.signupExam);
exports.examRouter.get("/get/all", examController.getAllExams);
//# sourceMappingURL=examRouter.js.map