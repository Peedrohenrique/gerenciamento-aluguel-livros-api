const Aluguel = require('../models/Alugueis');

module.exports = {
  // Busca todos os registros de aluguel
  async get(req, res) {
    try {
      const alugueis = await Aluguel.findAll(
        {order: [['createdAt', 'DESC']],
          include: [
            {
              association: 'cliente', // O alias deve ser 'autor', conforme definido no modelo
              attributes: ['nome'], // Retornar apenas o nome do autor
            },
            {
              association: 'livro', // O alias deve ser 'livro', conforme definido no modelo
              attributes: ['titulo'], // Retornar apenas o nome do livro
            }
          ],
        });
      return res.status(200).json(alugueis);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar registros de aluguel.' });
    }
  },

  // Busca um único registro de aluguel pelo ID
  async findOne(req, res) {
    const { id } = req.params;

    try {
      const aluguel = await Aluguel.findByPk(id);

      if (!aluguel) {
        return res.status(404).json({ error: 'Aluguel não encontrado.' });
      }

      return res.status(200).json(aluguel);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar registro de aluguel.' });
    }
  },

  // Cria um novo registro de aluguel
  async post(req, res) {
    const { cliente_id, livro_id, data_aluguel, data_devolucao, observacao, status } = req.body;

    if (!cliente_id || !livro_id || !data_aluguel || !data_devolucao) {
      return res.status(400).json({ error: 'Campos obrigatórios não fornecidos.' });
    }

    try {
      const aluguel = await Aluguel.create({
        cliente_id,
        livro_id,
        data_aluguel,
        data_devolucao,
        observacao,
        status,
      });

      return res.status(201).json(aluguel);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao criar registro de aluguel.' });
    }
  },

  // Atualiza um registro de aluguel existente
  async put(req, res) {
    const { id } = req.params;
    const { cliente_id, livro_id, data_aluguel, data_devolucao, observacao, status } = req.body;

    try {
      const aluguel = await Aluguel.findByPk(id);

      if (!aluguel) {
        return res.status(404).json({ error: 'Aluguel não encontrado.' });
      }

      await aluguel.update({
        cliente_id,
        livro_id,
        data_aluguel,
        data_devolucao,
        observacao,
        status,
      });

      return res.status(200).json(aluguel);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao atualizar registro de aluguel.' });
    }
  },

  // Remove um registro de aluguel
  async delete(req, res) {
    const { id } = req.params;

    try {
      const aluguel = await Aluguel.findByPk(id);

      if (!aluguel) {
        return res.status(404).json({ error: 'Aluguel não encontrado.' });
      }

      await aluguel.destroy();
      return res.status(200).json({ message: 'Aluguel removido com sucesso.' });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao remover registro de aluguel.' });
    }
  },
};
