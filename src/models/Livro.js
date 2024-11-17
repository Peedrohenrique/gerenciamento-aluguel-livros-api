const { Model, DataTypes } = require('sequelize');

class Livros extends Model {
  static init(sequelize) {
    super.init({
      titulo: DataTypes.STRING,
      descricao: DataTypes.STRING,
      preco_aluguel: DataTypes.DECIMAL(10,2),
    }, {
      sequelize
    });
  }

  static associate(models) {
    // Associação com Autores
    this.belongsTo(models.Autores, { foreignKey: 'autor_id', as: 'autor' });

    // Associação com Alugueis
    this.hasMany(models.Alugueis, { foreignKey: 'livro_id', as: 'alugueis' });
  }
}

module.exports = Livros;