/**
 * a modificar
 */
const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('medical_conditions_has_users1', {
    medical_conditions_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'medical_conditions',
        key: 'id'
      }
    },
    users_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    users_update_users_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'update_users_id'
      }
    },
    users_create_users_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'create_users_id'
      }
    }
  }, {
    sequelize,
    tableName: 'medical_conditions_has_users1',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "medical_conditions_id" },
          { name: "users_id" },
          { name: "users_update_users_id" },
          { name: "users_create_users_id" },
        ]
      },
      {
        name: "fk_medical_conditions_has_users1_users1_idx",
        using: "BTREE",
        fields: [
          { name: "users_id" },
          { name: "users_update_users_id" },
          { name: "users_create_users_id" },
        ]
      },
      {
        name: "fk_medical_conditions_has_users1_medical_conditions1_idx",
        using: "BTREE",
        fields: [
          { name: "medical_conditions_id" },
        ]
      },
    ]
  });
};
