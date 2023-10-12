import { Sequelize as _Sequelize } from 'sequelize';
export default function (sequelize, DataTypes) {
  return sequelize.define('tests_determination', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    value_max: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    value_min: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date_create_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: _Sequelize.literal('CURRENT_TIMESTAMP')
    },
    observations: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tests_determination',
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
    ]
  });
};
