const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    gender: {
      type: DataTypes.ENUM('M','F','X',''),
      allowNull: false,
      comment: "M: masculino, F: femenino, X: gen x"
    },
    sex: {
      type: DataTypes.ENUM('M','F'),
      allowNull: false
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1,
      comment: "0: inactivo, 1: activo"
    },
    document: {
      type: DataTypes.STRING(9),
      allowNull: false,
      unique: "document"
    },
    phone: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(80),
      allowNull: false,
      unique: "email"
    },
    address: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    birth_at: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    create_users_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    update_users_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    city_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'citys',
        key: 'id'
      }
    },
    pregnant: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'users',
    timestamps: true,
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
        name: "email",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "document",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "document" },
        ]
      },
      {
        name: "fk_users_citys1_idx",
        using: "BTREE",
        fields: [
          { name: "city_id" },
        ]
      },
      {
        name: "fk_users_users1_idx",
        using: "BTREE",
        fields: [
          { name: "update_users_id" },
        ]
      },
    ]
  });
};
