"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const labRouter_1 = require("./Routes/labRouter");
const Server_1 = __importDefault(require("./Services/Server"));
Server_1.default();
const app = express_1.default();
app.use("/user", labRouter_1.labRouter);
//# sourceMappingURL=index.js.map