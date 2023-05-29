const {Sequelize, DataTypes} = require('sequelize');
const db = require('./db');

/*id integer auto_increment primary key,
 nome varchar(100),
 matricula varchar(20) unique,
 data_nascimento date,
 pontuacao integer
*/
const Aluno = db.define('aluno', {
id: {
type: DataTypes.INTEGER,
autoIncrement: true,
primaryKey: true
},
nome: {
type: DataTypes.STRING,
allowNull: false 
},
matricula: {
type: DataTypes.STRING,
unique: true
},

data_nascimento: {
type: DataTypes.DATEONLY
},
pontuacao: {
type: DataTypes.INTEGER,
defaultValue: 0 
},
})

module.exports = Aluno