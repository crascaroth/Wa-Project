"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.relationRouter = void 0;
const express_1 = __importDefault(require("express"));
const relationController_1 = require("../Controller/relationController");
exports.relationRouter = express_1.default.Router();
const relationController = new relationController_1.RelationController();
exports.relationRouter.put('/associate', relationController.associate);
//# sourceMappingURL=relationRouter.js.map