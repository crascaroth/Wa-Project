import { BaseDatabase } from "../Data/BaseDatabase";

class Migration extends BaseDatabase {
  public up = () => {

    const Laboratory = async () => {
      await this.getConnection().raw(`
      CREATE TABLE IF NOT EXISTS "wa_exam" (
        "id" VARCHAR(255) NOT NULL,
        "nome" VARCHAR(255) NOT NULL,
        "tipo" VARCHAR(255) NOT NULL,
        "status" TINYINT NOT NULL,
        PRIMARY KEY ("id"));
  `)
    }

    const Exam = async () => {
      await this.getConnection().raw(`
        CREATE TABLE IF NOT EXISTS medico (
        id VARCHAR(255) PRIMARY KEY,
        login TEXT NOT NULL,
        password TEXT NOT NULL,
        fk_especialidade	VARCHAR(255) NOT NULL,
        FOREIGN KEY (fk_especialidade) REFERENCES especialidades(id)
        );
    `)
    }
    const Relation = async () => {
      await this.getConnection().raw(`
      CREATE TABLE IF NOT EXISTS "wa_relation_exam_laboratory" (
        "fk_laboratory" VARCHAR(255) NOT NULL,
        "fk_exam" VARCHAR(255) NOT NULL,
        FOREIGN KEY (fk_laboratory) REFERENCES wa_laboratory(id),
        FOREIGN KEY (fk_exam) REFERENCES wa_exam(id)
        );
      `)
    }
    
  Laboratory();
  Exam();
  Relation();
  }
  
}