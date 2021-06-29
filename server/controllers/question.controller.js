const db = require("../models");
const Question = db.questions;
// const Op = db.Sequelize.Op;

module.exports = {
  newQuestion: (req, res) => {
    const question = {
      content: req.body.content,
    };
    // put some validations
    
    Question.create(question)
      .then((question) => {
        res.json({ message: "success", results: question });
      })
      .catch((err) => {
        res.json({ message: "error", results: err });
      });
  },
  getAllQuestions: (req, res) => {
    Question.findAll()
      .then((questions) => {
        res.json({ message: "success", results: questions });
      })
      .catch((err) => {
        res.json({ message: "error", results: err });
      });
  },
  findOneQuestion: (req, res) => {
    const id = req.params.id;
    Question.findByPk(id)
      .then((question) => {
        res.json({ message: "success", results: question });
      })
      .catch((err) => {
        res.json({ message: "error", results: err });
      });
  },
  updateQuestion: (req, res) => {
    const id = req.params.id;
    Question.update(req.body, {
      where: { id: id },
    })
      .then((question) => {
        res.json({ message: "success", results: question });
      })
      .catch((err) => {
        res.json({ message: "error", results: err });
      });
  },
  deleteQuestion: (req, res) => {
    const id = req.params.id;
    Question.destroy({ where: { id: id } })
      .then((question) => {
        res.json({ message: "success", results: question });
      })
      .catch((err) => {
        res.json({ message: "error", results: err });
      });
  },
};
