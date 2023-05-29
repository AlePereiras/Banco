const { Sequelize } = require('sequelize');

const dbSequelize = new Sequelize('aluno', 'aluno', 'aluno', {
    dialect: 'mysql', host: 'localhost'
});

//const dbSequelize = new Sequelize(process.env.DATABASE_URL);

module.exports = dbSequelize;