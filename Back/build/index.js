"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const examRouter_1 = require("./Routes/examRouter");
const labRouter_1 = require("./Routes/labRouter");
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
app.listen(3003, () => {
    console.log("Server running on port 3003");
});
app.use("/laboratory", labRouter_1.labRouter);
app.use("/exam", examRouter_1.examRouter);
//# sourceMappingURL=index.js.map