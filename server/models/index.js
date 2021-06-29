const dbConfig = require("../config/db.config.js");
const mysql = require('mysql2/promise');
const { Sequelize } = require("sequelize");


const db = {};

async function initialize() {
  try {
      await dbConnect(); // <-- Notice we added here the "await" keyword.
  } catch (e) {
      console.error(e);
  } finally {
      console.log('We do cleanup here');
  }
  return "Nothing found";
}

async function dbConnect() {
  // create db if it doesn't already exist
  const { host, port, user, password, database } = dbConfig;
  const connection = await mysql.createConnection({ host, port, user, password, database });

  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbConfig}\`; `);

  // connect to db
  const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    // host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    // operatorsAliases: false,
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle,
    },
  });

  db.Sequelize = Sequelize;
  db.sequelize = sequelize;
  // init models and add them to exported db object
  db.question = require("./question.model")(sequelize, Sequelize);
  db.user = require("./user.model")(sequelize, Sequelize);
  db.section = require("./section.model")(sequelize, Sequelize);
  db.category = require("./category.model")(sequelize, Sequelize);
  db.admin = require("./admin.model")(sequelize, Sequelize);

  // INIT Model connections one to many:

  // One User to Many Questions
  db.user.hasMany(db.question, { as: "questions" });
  db.question.belongsTo(db.user, {
    foreignKey: "userId",
    as: "user",
  });

  // One Section to Many Questions
  db.section.hasMany(db.question, { as: "questions" });
  db.question.belongsTo(db.section, {
    foreignKey: "sectionId",
    as: "section",
  });

  // One Category to Many Questions
  db.category.hasMany(db.question, { as: "questions" });
  db.question.belongsTo(db.category, {
    foreignKey: "categoryId",
    as: "category",
  });

  // One Section to Many Categories
  db.section.hasMany(db.category, { as: "categories" });
  db.category.belongsTo(db.section, {
    foreignKey: "sectionId",
    as: "section",
  });
}

initialize();

module.exports = db;