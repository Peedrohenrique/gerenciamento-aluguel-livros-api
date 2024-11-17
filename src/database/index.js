const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Autor = require('../models/Autor');
const Livro = require('../models/Livro');
const Cliente = require('../models/Cliente');
const Aluguel = require('../models/Alugueis');

const connection = new Sequelize(dbConfig);

Autor.init(connection);
Livro.init(connection);
Aluguel.init(connection);
Cliente.init(connection);

Autor.associate(connection.models);
Livro.associate(connection.models);
Aluguel.associate(connection.models);
Cliente.associate(connection.models);

module.exports = connection;