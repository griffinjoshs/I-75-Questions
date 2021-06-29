const db = require("../models");
const Category = db.categories;
// const Op = db.Sequelize.Op;

module.exports = {
  newCategory: (req, res) => {
    console.log(db.categories);
    console.log(typeof db.categories);
    // put some validations
    console.log(req.body.name);
    Category.create({ name: req.body.name })
      .then((category) => {
        res.json({ message: "success", results: category });
      })
      .catch((err) => {
        res.json({ message: "error", results: err });
      });
  },
  getAllCategories: (req, res) => {
    Category.findAll()
      .then((categories) => {
        res.json({ message: "success", results: categories });
      })
      .catch((err) => {
        res.json({ message: "error", results: err });
      });
  },
  findOneCategory: (req, res) => {
    const id = req.params.id;
    Category.findByPk(id)
      .then((category) => {
        res.json({ message: "success", results: category });
      })
      .catch((err) => {
        res.json({ message: "error", results: err });
      });
  },
  updateCategory: (req, res) => {
    const id = req.params.id;
    Category.update(req.body, {
      where: { id: id },
    })
      .then((category) => {
        res.json({ message: "success", results: category });
      })
      .catch((err) => {
        res.json({ message: "error", results: err });
      });
  },
  deleteCategory: (req, res) => {
    const id = req.params.id;
    Category.destroy({ where: { id: id } })
      .then((category) => {
        res.json({ message: "success", results: category });
      })
      .catch((err) => {
        res.json({ message: "error", results: err });
      });
  },
};
