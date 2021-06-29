const UserController = require('../controllers/user.controller');
// create authentication for admin to access all users *****
module.exports = function(app) {
  app.post('/api/users/new', UserController.newUser);
  app.get('/api/users/:id', UserController.findOneUser);
  app.put('/api/users/:id', UserController.updateUser);
  app.delete('/api/users/:id', UserController.deleteUser);
}