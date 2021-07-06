
`
CREATE TABLE IF NOT EXISTS "wa_laboratory" (
    "id" VARCHAR(255) NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "endereco" VARCHAR(255) NOT NULL,
    "status" TINYINT NOT NULL,
    PRIMARY KEY ("id"));
  
  CREATE TABLE IF NOT EXISTS "wa_exam" (
    "id" VARCHAR(255) NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "tipo" VARCHAR(255) NOT NULL,
    "status" TINYINT NOT NULL,
    PRIMARY KEY ("id"));
    
    CREATE TABLE IF NOT EXISTS "wa_relation_exam_laboratory" (
    "fk_laboratory" VARCHAR(255) NOT NULL,
    "fk_exam" VARCHAR(255) NOT NULL,
    FOREIGN KEY (fk_laboratory) REFERENCES wa_laboratory(id),
    FOREIGN KEY (fk_exam) REFERENCES wa_exam(id)
    );
`
