"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const knex_1 = __importDefault(require("knex"));
const dotenv_1 = __importDefault(require("dotenv"));
const server = () => {
    dotenv_1.default.config();
    const connection = knex_1.default({
        client: "mysql",
        connection: {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_SCHEMA,
            port: 3306,
            multipleStatements: true
        }
    });
    const app = express_1.default();
    app.use(express_1.default.json());
    app.use(cors_1.default());
    app.listen(3003, () => {
        console.log("Server running on port 3003");
    });
};
exports.server = server;
exports.default = exports.server;
//# sourceMappingURL=Server.js.map