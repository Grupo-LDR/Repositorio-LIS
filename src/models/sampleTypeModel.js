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
    allowNull: true
  },
  create_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.Sequelize.fn('current_timestamp')
  },
  update_at: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  sequelize: Conexion.sequelize,
  tableName: 'samples_type',
  timestamps: true,
  createdAt: 'create_at', // Nombre de la columna de creación
  updatedAt: 'update_at',// Nombre de la columna de actualización
});
export default SampleType;