import User from "./userModel.js"
import City from "./cityModel.js"

User.hasOne(City, {
    foreignKey: 'cityId', // Nombre de la columna en el modelo User
    sourceKey: 'id' // Nombre de la columna en el modelo City que se relaciona con User
  });