import { Sequelize as _Sequelize } from 'sequelize';
export default function (sequelize, DataTypes) {
  return sequelize.define('profiles', {
    id: {
      autoIncrement: true,
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    access_auth: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    date_update_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_create_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: _Sequelize.literal('CURRENT_TIMESTAMP')
    },
    license: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    date_delete_at: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    users_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'profiles',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "users_id" },
        ]
      },
      {
        name: "fk_profiles_users1_idx",
        using: "BTREE",
        fields: [
          { name: "users_id" },
        ]
      },
    ]
  });
};
