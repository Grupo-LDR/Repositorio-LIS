/**
1. Sangre
2. Orina
3. Heces
4. Saliva
5. Líquido cefalorraquídeo
6. Esputo
7. Líquido pleural
8. Secreciones y exudados
9. Tejidos 
10. Orina de 24 horas
11. Heces de 24 horas
12. Líquido sinovial
*/
import Conexion from './conexion.js';
import { Sequelize, DataTypes, Model } from 'sequelize';
Conexion.conectar();

class SampleType extends Model { };
SampleType.init({
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  },
  name: {
    type: DataTypes.STRING(45),
    allowNull: false,
    validate: {
      notEmpty: { msg: 'El nombre no puede estar vacío' },
      len: { args: [3, 30], msg: 'El nombre debe tener entre 3 y 30 caracteres' }
    }
  },
  create_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.Sequelize.fn('current_timestamp')
  },
  update_at: {
    type: DataTypes.DATE,
    allowNull: true
  },
  observation: {
    type: DataTypes.STRING(150),
    allowNull: true
  }
}, {
  sequelize: Conexion.sequelize,
  tableName: 'samples_type',
  modelName: 'sampleType',
  timestamps: true,
  createdAt: 'create_at', // Nombre de la columna de creación
  updatedAt: 'update_at',// Nombre de la columna de actualización
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
export default SampleType;