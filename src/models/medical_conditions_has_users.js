import Sequelize from 'sequelize';
export default function (sequelize, DataTypes) {
  return sequelize.define('medical_conditions_has_users', {
    medical_conditions_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    users_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'medical_conditions_has_users',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "medical_conditions_id" },
          { name: "users_id" },
        ]
      },
      {
        name: "fk_medical_conditions_has_users_users1_idx",
        using: "BTREE",
        fields: [
          { name: "users_id" },
        ]
      },
      {
        name: "fk_medical_conditions_has_users_medical_conditions1_idx",
        using: "BTREE",
        fields: [
          { name: "medical_conditions_id" },
        ]
      },
    ]
  });
};
