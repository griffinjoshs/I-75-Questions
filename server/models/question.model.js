

module.exports = (sequelize, Sequelize) => {
  const Question = sequelize.define("question", {
    content: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN,
      default: false,
    }
  });
  return Question;
};