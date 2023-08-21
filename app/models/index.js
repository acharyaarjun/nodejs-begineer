const { sequelize, Sequelize, DataTypes, Op } = require("../config/dbConfig");

// const Customer = require("./customer.model");

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.DataTypes = DataTypes;
db.Op = Op;

// db.Customer = Customer(sequelize, DataTypes); yo garni tw tala ko garni yeutai ho tara talako garni best ho
db.Customer = require("./customer.model")(sequelize, DataTypes);

module.exports = db;
