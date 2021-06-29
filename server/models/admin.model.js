module.exports = (sequelize, Sequelize) => {
  const Admin = sequelize.define("admin", {
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    isAdmin: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    }
  });
  return Admin;
};