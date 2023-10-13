var DataTypes = require("sequelize").DataTypes;
var _action_records = require("./action_records").default;
var _audit_orders = require("./audit_orders").default;
var _audit_result = require("./audit_result").default;
var _citys = require("./citys").default;
var _doctors = require("./doctors").default;
var _medical_conditions = require("./medical_conditions").default;
var _medical_conditions_has_users = require("./medical_conditions_has_users").default;
var _orders = require("./orders").default;
var _prestaciones = require("./prestaciones").default;
var _profiles = require("./profiles").default;
var _samples = require("./samples").default;
var _states = require("./states").default;
var _studie_results = require("./studie_results").default;
var _studies = require("./studies").default;
var _test_groups = require("./test_groups").default;
var _tests = require("./tests").default;
var _tests_determination = require("./tests_determination").default;
var _tests_reference_values = require("./tests_reference_values").default;
var _users = require("./users").default;

function initModels(sequelize) {
  var action_records = _action_records(sequelize, DataTypes);
  var audit_orders = _audit_orders(sequelize, DataTypes);
  var audit_result = _audit_result(sequelize, DataTypes);
  var citys = _citys(sequelize, DataTypes);
  var doctors = _doctors(sequelize, DataTypes);
  var medical_conditions = _medical_conditions(sequelize, DataTypes);
  var medical_conditions_has_users = _medical_conditions_has_users(sequelize, DataTypes);
  var orders = _orders(sequelize, DataTypes);
  var prestaciones = _prestaciones(sequelize, DataTypes);
  var profiles = _profiles(sequelize, DataTypes);
  var samples = _samples(sequelize, DataTypes);
  var states = _states(sequelize, DataTypes);
  var studie_results = _studie_results(sequelize, DataTypes);
  var studies = _studies(sequelize, DataTypes);
  var test_groups = _test_groups(sequelize, DataTypes);
  var tests = _tests(sequelize, DataTypes);
  var tests_determination = _tests_determination(sequelize, DataTypes);
  var tests_reference_values = _tests_reference_values(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);


  return {
    action_records,
    audit_orders,
    audit_result,
    citys,
    doctors,
    medical_conditions,
    medical_conditions_has_users,
    orders,
    prestaciones,
    profiles,
    samples,
    states,
    studie_results,
    studies,
    test_groups,
    tests,
    tests_determination,
    tests_reference_values,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
