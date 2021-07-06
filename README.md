# Wa-Project

This is project directed to a Job Vacancy

first of all import or clone this project with

~~~
git clone https://github.com/crascaroth/Wa-Project.git
~~~

next enter the Folder directory

~~~
cd Back
~~~

install it with npm

~~~
npm install
~~~

after that you need to create your .env, with the information of your database, since this is an mysql database as below

~~~ Database Configuration
DB_HOST = 35.226.146.116
DB_USER = 
DB_PASSWORD = 
DB_SCHEMA = 

JWT_KEY = 123

BCRYPT_COST = 12
~~~
now you need to migrate the tables, for this use:
~~~
npm run migrations
~~~
OR execute in your database workbench 

~~~
CREATE TABLE IF NOT EXISTS wa_exam (
        id VARCHAR(255) NOT NULL,
        nome VARCHAR(255) NOT NULL,
        tipo VARCHAR(255) NOT NULL,
        status TINYINT NOT NULL,
        PRIMARY KEY (id));
  
  CREATE TABLE IF NOT EXISTS wa_laboratory (
        id VARCHAR(255) NOT NULL,
        nome VARCHAR(255) NOT NULL,
        endereco VARCHAR(255) NOT NULL,
        status TINYINT NOT NULL,
        PRIMARY KEY (id));
    
     CREATE TABLE IF NOT EXISTS wa_relation_exam_laboratory (
        fk_laboratory VARCHAR(255) NOT NULL,
        fk_exam VARCHAR(255) NOT NULL,
        FOREIGN KEY (fk_laboratory) REFERENCES wa_laboratory(id),
        FOREIGN KEY (fk_exam) REFERENCES wa_exam(id));
~~~

now just start your API!

~~~
npm start
~~~
