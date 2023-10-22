/**
 * a modificar
 */
const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('audit_studie_results', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 2,
      comment: "estados de resultado en 1 valido, 0 no valido 2 en proceso "
    },
    values: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    values_standard: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    date_create_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    date_validate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    observations: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'audit_studie_results',
    timestamps: false
  });
};
