const Autor = require('../models/Autor');
const Livro = require('../models/Livro');

module.exports = {

  // Busca todos os livros
  async get(req, res) {
    try {
      const livros = await Livro.findAll({
        order: [['createdAt', 'DESC']],
        include: [
          {
            association: 'autor', // O alias deve ser 'autor', conforme definido no modelo
            attributes: ['nome'], // Retornar apenas o nome do autor
          },
        ],
      });
  
      return res.status(200).json(livros);
    } catch (error) {
      console.error(error); // Isso ajudará a identificar o erro
      return res.status(500).json({ error: 'Erro ao buscar livros.' });
    }
  },

  // Busca um livro específico pelo ID
  async findOne(req, res) {
    const { id } = req.params;

    try {
      const livro = await Livro.findByPk(id);

      if (!livro) {
        return res.status(404).json({ error: 'Livro não encontrado.' });
      }

      return res.status(200).json(livro);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar livro.' });
    }
  },

  // Cria um novo livro
  async post(req, res) {
    const { titulo, descricao, preco_aluguel, autor_id } = req.body;

    try {
      const autor = await Autor.findByPk(autor_id);

      if (!autor) {
        return res.status(400).json({ error: 'Autor não encontrado.' });
      }

      const livro = await Livro.create({
        titulo,
        descricao,
        preco_aluguel,
        autor_id,
      });

      return res.status(201).json(livro);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao criar livro.' });
    }
  },

  // Atualiza um livro existente
  async put(req, res) {
    const { id } = req.params;
    const { titulo, descricao, preco_aluguel, autor_id } = req.body;

    try {
      const livro = await Livro.findByPk(id);

      if (!livro) {
        return res.status(404).json({ error: 'Livro não encontrado.' });
      }

      const autor = await Autor.findByPk(autor_id);

      if (!autor) {
        return res.status(400).json({ error: 'Autor não encontrado.' });
      }

      await livro.update({
        titulo,
        descricao,
        preco_aluguel,
        autor_id,
      });

      return res.status(200).json(livro);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao atualizar livro.' });
    }
  },

  // Remove um livro
  async delete(req, res) {
    const { id } = req.params;

    try {
      const livro = await Livro.findByPk(id);

      if (!livro) {
        return res.status(404).json({ error: 'Livro não encontrado.' });
      }

      await livro.destroy();
      return res.status(200).json({ message: 'Livro removido com sucesso.' });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao remover livro.' });
    }
  },
};
