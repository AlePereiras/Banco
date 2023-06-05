const { Sequelize, DataTypes } = require('sequelize');
const db = require('./db');

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
        unique: 'matricula'
    },

    data_nascimento: {
        type: DataTypes.DATEONLY,
    },
    pontuacao: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    avatar_img: {
        type: DataTypes.STRING,
        allowNull: true
    },
}, {
    tableName: 'aluno',
    timestamps: false
});

module.exports = Aluno