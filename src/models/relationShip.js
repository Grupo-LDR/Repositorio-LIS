import User from "./userModel.js"
import City from "./cityModel.js"
/**
 * esto lo hice asi solo, pero si lo queres hacer con clases, ya es otro bardo, te dejo que te rompas la cabeza vos con las clases.
 */
function relaciones() {
  User.belongsTo(City, {
    foreignKey: 'cityId',
  });
}
relaciones();
export { User, City };
