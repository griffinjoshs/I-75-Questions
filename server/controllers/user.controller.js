const db = require("../models");
const User = db.users;
// const Op = db.Sequelize.Op;

module.exports = {
  // example route that will be used to call this function from the user.routes file: app.post('/api/users/new', userController.newUser)
  newUser: (req, res) => {
    // you should write some validations first
    const user = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
    };
    User.create(user)
      .then((user) => {
        res.json({ message: "success", results: user });
      })
      .catch((err) => {
        res.json({ message: "error", results: err });
      });
  },
  // getAllUsers: (req, res) => {
  //   User.findAll()
  //     .then((users) => {
  //       res.json({ message: "success", results: users });
  //     })
  //     .catch((err) => {
  //       res.json({ message: "error", results: err });
  //     });
  // },
  findOneUser: (req, res) => {
    const id = req.params.id;
    User.findByPk(id)
      .then((user) => {
        res.json({ message: "success", results: user });
      })
      .catch((err) => {
        res.json({ message: "error", results: err });
      });
  },
  updateUser: (req, res) => {
    const id = req.params.id;
    User.update(req.body, {
      where: { id: id },
    })
      .then((user) => {
        res.json({ message: "success", results: user });
      })
      .catch((err) => {
        res.json({ message: "error", results: err });
      });
  },
  deleteUser: (req, res) => {
    const id = req.params.id;
    User.destroy({ where: { id: id } })
      .then((user) => {
        res.json({ message: "success", results: user });
      })
      .catch((err) => {
        res.json({ message: "error", results: err });
      });
  },
};
