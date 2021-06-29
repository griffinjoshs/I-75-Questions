const db = require("../models");
const Section = db.sections;
// const Op = db.Sequelize.Op;

module.exports = {
  newSection: (req, res) => {
    const section = {
      content: req.body.content,
    };
    // put some validations

    Section.create(section)
      .then((section) => {
        res.json({ message: "success", results: section });
      })
      .catch((err) => {
        res.json({ message: "error", results: err });
      });
  },
  getAllSections: (req, res) => {
    Section.findAll()
      .then((sections) => {
        res.json({ message: "success", results: sections });
      })
      .catch((err) => {
        res.json({ message: "error", results: err });
      });
  },
  findOneSection: (req, res) => {
    const id = req.params.id;
    Section.findByPk(id)
      .then((section) => {
        res.json({ message: "success", results: section });
      })
      .catch((err) => {
        res.json({ message: "error", results: err });
      });
  },
  updateSection: (req, res) => {
    const id = req.params.id;
    Section.update(req.body, {
      where: { id: id },
    })
      .then((section) => {
        res.json({ message: "success", results: section });
      })
      .catch((err) => {
        res.json({ message: "error", results: err });
      });
  },
  deleteSection: (req, res) => {
    const id = req.params.id;
    Section.destroy({ where: { id: id } })
      .then((section) => {
        res.json({ message: "success", results: section });
      })
      .catch((err) => {
        res.json({ message: "error", results: err });
      });
  },
};
