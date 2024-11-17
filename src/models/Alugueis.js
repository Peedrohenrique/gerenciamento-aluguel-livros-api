const { Model, DataTypes } = require('sequelize');

class Alugueis extends Model {
  static init(sequelize) {
    super.init({
      data_aluguel: DataTypes.DATE,
      data_devolucao: DataTypes.DATE,
      observacao: DataTypes.TEXT,
      status: DataTypes.TINYINT,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.Livros, { foreignKey: 'livro_id', as: 'livro' });
    this.belongsTo(models.Clientes, { foreignKey: 'cliente_id', as: 'cliente' });
  }
}

module.exports = Alugueis;
