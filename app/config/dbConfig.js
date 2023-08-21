const config = require("./config");

const { Sequelize, DataTypes, Op } = require("sequelize"); // curly bracket vaneko certain kura lai matrai import hanna

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  {
    host: config.db.host,
    dialect: config.db.dialect,
    poll: config.db.poll,
    log: true,
  }
);

// yo rw tallo same ho hai, promise ho 2 tarika ley use gareko
sequelize
  .authenticate()
  .then(() => {
    console.log("CONNECTION ESTABLISHED");
  })
  .catch((err) => {
    console.log("UNABLE TO CONNECT, ERROR: ", err);
  });

// try {
//     await sequelize.authenticate();
// } catch (err) {

// }

sequelize
  .sync({
    force: false,
    alter: false,
  })
  .then(() => {
    console.log("Model Synced");
  });

module.exports = {
  sequelize,
  Sequelize,
  DataTypes,
  Op,
};
