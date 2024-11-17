const Autor = require('../models/Autor');

module.exports = {
  async get(req, res) {
    try {
      const autores = await Autor.findAll({order: [['createdAt', 'DESC']]});
      return res.json(autores);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar autores.' });
    }
  },

  async post(req, res) {
    try {
      const { nome, biografia, data_nascimento, nacionalidade } = req.body;
      const autor = await Autor.create({ nome, biografia, data_nascimento, nacionalidade });
      return res.json(autor);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao criar autor.' });
    }
  },

  async findOne(req, res) {
    try {
      const { id } = req.params;
      const autor = await Autor.findByPk(id);

      if (!autor) {
        return res.status(404).json({ error: 'Autor não encontrado.' });
      }

      return res.json(autor);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar autor.' });
    }
  },

  async put(req, res) {
    try {
      const { id } = req.params;
      const { nome, biografia, data_nascimento, nacionalidade } = req.body;

      const autor = await Autor.findByPk(id);
      if (!autor) {
        return res.status(404).json({ error: 'Autor não encontrado.' });
      }

      await autor.update({ nome, biografia, data_nascimento, nacionalidade });

      return res.json(autor);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao atualizar autor.' });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;

      const autor = await Autor.findByPk(id);
      if (!autor) {
        return res.status(404).json({ error: 'Autor não encontrado.' });
      }

      await autor.destroy();
      return res.json({ message: 'Autor deletado com sucesso.' });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao deletar autor.' });
    }
  },
};
