const sequelize = require('../database');

// VW_DASHBOARD é uma visão criada no seu banco de dados
module.exports = {
  async get(req, res) {
    try {
      const dashboard = await sequelize.query(
        'SELECT * FROM VW_DASHBOARD',
        { type: sequelize.QueryTypes.SELECT }
      );

      return res.json(dashboard[0]);
    } catch (error) {
      console.error('Erro ao buscar dados do dashboard:', error);
      return res.status(500).json({ error: 'Erro ao buscar dados do dashboard' });
    }
  },
};
