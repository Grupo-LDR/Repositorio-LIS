var DataTypes = require("sequelize").DataTypes;
var _audit_orders = require("./audit_orders");
var _audit_result = require("./audit_result");
var _audit_studie_results = require("./audit_studie_results");
var _citys = require("./citys");
var _exam_determinations = require("./exam_determinations");
var _exam_reference_values = require("./exam_reference_values");
var _exams = require("./exams");
var _new_audit_orders = require("./new_audit_orders");
var _orders = require("./orders");
var _profiles = require("./profiles");
var _samples = require("./samples");
var _samples_type = require("./samples_type");
var _states = require("./states");
var _studie_results = require("./studie_results");
var _studies = require("./studies");
var _users = require("./users");

function initModels(sequelize) {
  var audit_orders = _audit_orders(sequelize, DataTypes);
  var audit_result = _audit_result(sequelize, DataTypes);
  var audit_studie_results = _audit_studie_results(sequelize, DataTypes);
  var citys = _citys(sequelize, DataTypes);
  var exam_determinations = _exam_determinations(sequelize, DataTypes);
  var exam_reference_values = _exam_reference_values(sequelize, DataTypes);
  var exams = _exams(sequelize, DataTypes);
  var new_audit_orders = _new_audit_orders(sequelize, DataTypes);
  var orders = _orders(sequelize, DataTypes);
  var profiles = _profiles(sequelize, DataTypes);
  var samples = _samples(sequelize, DataTypes);
  var samples_type = _samples_type(sequelize, DataTypes);
  var states = _states(sequelize, DataTypes);
  var studie_results = _studie_results(sequelize, DataTypes);
  var studies = _studies(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  users.belongsTo(citys, { as: "city", foreignKey: "city_id"});
  citys.hasMany(users, { as: "users", foreignKey: "city_id"});
  exam_determinations.belongsTo(exam_reference_values, { as: "exam_reference_value", foreignKey: "exam_reference_values_id"});
  exam_reference_values.hasMany(exam_determinations, { as: "exam_determinations", foreignKey: "exam_reference_values_id"});
  exam_determinations.belongsTo(exams, { as: "exam", foreignKey: "exams_id"});
  exams.hasMany(exam_determinations, { as: "exam_determinations", foreignKey: "exams_id"});
  studies.belongsTo(exams, { as: "exam", foreignKey: "exams_id"});
  exams.hasMany(studies, { as: "studies", foreignKey: "exams_id"});
  studies.belongsTo(orders, { as: "order", foreignKey: "order_id"});
  orders.hasMany(studies, { as: "studies", foreignKey: "order_id"});
  studies.belongsTo(samples, { as: "sample", foreignKey: "samples_id"});
  samples.hasMany(studies, { as: "studies", foreignKey: "samples_id"});
  exams.belongsTo(samples_type, { as: "sample_type", foreignKey: "sample_type_id"});
  samples_type.hasMany(exams, { as: "exams", foreignKey: "sample_type_id"});
  citys.belongsTo(states, { as: "state", foreignKey: "states_id"});
  states.hasMany(citys, { as: "cities", foreignKey: "states_id"});
  studie_results.belongsTo(studies, { as: "study", foreignKey: "studies_id"});
  studies.hasMany(studie_results, { as: "studie_results", foreignKey: "studies_id"});
  orders.belongsTo(users, { as: "patient", foreignKey: "patient_id"});
  users.hasMany(orders, { as: "orders", foreignKey: "patient_id"});
  orders.belongsTo(users, { as: "employee", foreignKey: "employee_id"});
  users.hasMany(orders, { as: "employee_orders", foreignKey: "employee_id"});
  orders.belongsTo(users, { as: "doctor", foreignKey: "doctor_id"});
  users.hasMany(orders, { as: "doctor_orders", foreignKey: "doctor_id"});
  profiles.belongsTo(users, { as: "user", foreignKey: "users_id"});
  users.hasMany(profiles, { as: "profiles", foreignKey: "users_id"});

  return {
    audit_orders,
    audit_result,
    audit_studie_results,
    citys,
    exam_determinations,
    exam_reference_values,
    exams,
    new_audit_orders,
    orders,
    profiles,
    samples,
    samples_type,
    states,
    studie_results,
    studies,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
