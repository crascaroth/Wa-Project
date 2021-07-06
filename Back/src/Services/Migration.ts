import { BaseDatabase } from "../Data/BaseDatabase";

import dotenv from "dotenv";
import cors from "cors";
import express, { Express } from "express";

dotenv.config();
const app: Express = express();
app.use(express.json());
app.use(cors());

class Migration extends BaseDatabase {
  public up = async () => {
    const laboratory = async () => {
      await this.getConnection().raw(`
      CREATE TABLE IF NOT EXISTS wa_exam (
        id VARCHAR(255) NOT NULL,
        nome VARCHAR(255) NOT NULL,
        tipo VARCHAR(255) NOT NULL,
        status TINYINT NOT NULL,
        PRIMARY KEY (id));
  `);
      await BaseDatabase.destroyConnection();
    };

    const exam = async () => {
      await this.getConnection().raw(`
      CREATE TABLE IF NOT EXISTS wa_laboratory (
        id VARCHAR(255) NOT NULL,
        nome VARCHAR(255) NOT NULL,
        endereco VARCHAR(255) NOT NULL,
        status TINYINT NOT NULL,
        PRIMARY KEY (id));
        
    `);
      await BaseDatabase.destroyConnection();
    };
    const relation = async () => {
      await this.getConnection().raw(`
      CREATE TABLE IF NOT EXISTS wa_relation_exam_laboratory (
        fk_laboratory VARCHAR(255) NOT NULL,
        fk_exam VARCHAR(255) NOT NULL,
        FOREIGN KEY (fk_laboratory) REFERENCES wa_laboratory(id),
        FOREIGN KEY (fk_exam) REFERENCES wa_exam(id));
        
      `);
      await BaseDatabase.destroyConnection();
    };
    laboratory();
    exam();
    relation();
  };
}

const migration = new Migration();
migration.up();
