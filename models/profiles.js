const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('profiles', {
    id: {
      autoIncrement: true,
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    users_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "Serian los oles:\npor defal todos son pacientes, asiqu eno exite\nTengo: \ndoctor, tecnico, bioquimico, admin, recepcion\n\n",
      references: {
        model: 'users',
        key: 'id'
      }
    },
    access_auth: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false
    },
    name: {
      type: DataTypes.ENUM('Recepcionista','Tecnico','Bioquimico','Administrador'),
      allowNull: false
    },
    license: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    update_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    create_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    delete_at: {
      type: DataTypes.DATE,
      allowNull: true
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
