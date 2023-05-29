/*
   MYSQL id integer auto_increment primary key,
   POSTGRES id serial primary key
*/


CREATE TABLE aluno (
 id integer auto_increment primary key,
 nome varchar(100),
 matricula varchar(20) unique,
 data_nascimento date,
 pontuacao integer
);

CREATE TABLE atividade (
id integer auto_increment primary key,
aluno_id integer,
nome varchar(100),
disciplina varchar(100),
nota decimal(10,2),
observacao varchar(255),
FOREIGN KEY (aluno_id) REFERENCES aluno(id)
);

INSERT INTO aluno VALUES
(default, 'Bruno Pereira', '20986465fdf', '1986-10-20', 0),
(default, 'Thiago Pereira', '20446465fdf', '1686-06-20', 0),
(default, 'Natalina Pereira', '20046465fdf', '1986-06-18', 0),
(default, 'Alessandra Pereira', '20226465fdf', '1986-06-20', 0);

