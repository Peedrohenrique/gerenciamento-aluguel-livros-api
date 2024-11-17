const Cliente = require('../models/Cliente');

module.exports = {
  // Busca todos os clientes
  async get(req, res) {
    try {
      const clientes = await Cliente.findAll({order: [['createdAt', 'DESC']]});
      return res.status(200).json(clientes);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar clientes.' });
    }
  },

  // Busca um cliente específico pelo ID
  async findOne(req, res) {
    const { id } = req.params;

    try {
      const cliente = await Cliente.findByPk(id);

      if (!cliente) {
        return res.status(404).json({ error: 'Cliente não encontrado.' });
      }

      return res.status(200).json(cliente);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar cliente.' });
    }
  },

  // Cria um novo cliente
  async post(req, res) {
    const { nome, email, telefone } = req.body;

    if (!nome || !email || !telefone) {
      return res.status(400).json({ error: 'Campos obrigatórios não fornecidos.' });
    }

    try {
      const cliente = await Cliente.create({
        nome,
        email,
        telefone,
      });

      return res.status(201).json(cliente);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao criar cliente.' });
    }
  },

  // Atualiza um cliente existente
  async put(req, res) {
    const { id } = req.params;
    const { nome, email, telefone } = req.body;

    try {
      const cliente = await Cliente.findByPk(id);

      if (!cliente) {
        return res.status(404).json({ error: 'Cliente não encontrado.' });
      }

      await cliente.update({
        nome,
        email,
        telefone,
      });

      return res.status(200).json(cliente);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao atualizar cliente.' });
    }
  },

  // Remove um cliente
  async delete(req, res) {
    const { id } = req.params;

    try {
      const cliente = await Cliente.findByPk(id);

      if (!cliente) {
        return res.status(404).json({ error: 'Cliente não encontrado.' });
      }

      await cliente.destroy();
      return res.status(200).json({ message: 'Cliente removido com sucesso.' });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao remover cliente.' });
    }
  },
};
