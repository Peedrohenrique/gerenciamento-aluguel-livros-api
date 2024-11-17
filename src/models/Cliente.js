const { Model, DataTypes } = require('sequelize');

class Clientes extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
      telefone: DataTypes.STRING,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.hasMany(models.Alugueis, { foreignKey: 'cliente_id', as: 'alugueis' });
  }
}

module.exports = Clientes;