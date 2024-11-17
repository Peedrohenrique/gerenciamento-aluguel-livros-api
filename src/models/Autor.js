const { Model, DataTypes } = require('sequelize');

class Autores extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      biografia: DataTypes.TEXT,
      data_nascimento: DataTypes.DATE,
      nacionalidade: DataTypes.STRING,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.hasMany(models.Livros, { foreignKey: 'autor_id', as: 'livros' });
  }
}

module.exports = Autores;