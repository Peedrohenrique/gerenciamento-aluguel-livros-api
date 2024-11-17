const { Model, DataTypes } = require('sequelize');

class Dashboard extends Model {
  static init(sequelize) {
    super.init({
      total_valor_aluguel: DataTypes.DECIMAL(10,2),
      total_clientes: DataTypes.NUMBER,
      total_livros: DataTypes.NUMBER,
      total_autores: DataTypes.NUMBER,
    }, {
      sequelize
    })
  }
}

module.exports = Dashboard;