const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('studie_results', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    studies_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'studies',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 2,
      comment: "estados de resultado en 1 valido, 0 no valido 2 en proceso "
    },
    values: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    observation: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    validate_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    create_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    update_at: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'studie_results',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "fk_studie_results_studies1_idx",
        using: "BTREE",
        fields: [
          { name: "studies_id" },
        ]
      },
    ]
  });
};
