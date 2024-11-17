const express = require('express');

const AutorController = require('./controllers/AutorController');
const LivroController = require('./controllers/LivroController');
const ClientesController = require('./controllers/ClienteController');
const AlugueisterController = require('./controllers/AluguelController');

const DashboardController = require('./controllers/DashboardController');

const routes = express.Router();

// Rotas para os métodos CRUD de autores
routes.get('/autores', AutorController.get); // Busca todos os autores
routes.post('/autores', AutorController.post);  // Busca um autor por ID
routes.get('/autores/:id', AutorController.findOne); // Cria novo autor
routes.put('/autores/:id', AutorController.put);  // Atualiza autor por ID
routes.delete('/autores/:id', AutorController.delete); // Remove autor por ID

// Rotas para os métodos CRUD de livros
routes.get('/livros', LivroController.get);  // Busca todos os livros
routes.get('/livros/:id', LivroController.findOne);  // Busca um livro por ID
routes.post('/livros', LivroController.post);  // Cria novo livro
routes.put('/livros/:id', LivroController.put);  // Atualiza livro por ID
routes.delete('/livros/:id', LivroController.delete);  // Remove livro por ID

// Rotas para os métodos CRUD de clientes
routes.get('/clientes', ClientesController.get);  // Busca todos
routes.get('/clientes/:id', ClientesController.findOne);  // Busca por ID
routes.post('/clientes', ClientesController.post);  // Cria novo cliente
routes.put('/clientes/:id', ClientesController.put);  // Atualiza cliente por ID
routes.delete('/clientes/:id', ClientesController.delete);  // Remove cliente por ID

// Rotas para os métodos CRUD de aluguel
routes.get('/alugueis', AlugueisterController.get);  // Busca todos
routes.get('/alugueis/:id', AlugueisterController.findOne);  // Busca por ID
routes.post('/alugueis', AlugueisterController.post);  // Cria novo
routes.put('/alugueis/:id', AlugueisterController.put);  // Atualiza por ID
routes.delete('/alugueis/:id', AlugueisterController.delete);  // Remove por ID

// Rotas para o dashboard
routes.get('/dashboard', DashboardController.get);


module.exports = routes;