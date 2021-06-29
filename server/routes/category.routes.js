const CategoryController = require('../controllers/category.controller');

module.exports = function(app) {
  app.get('/api/categories', CategoryController.getAllCategories);
  app.post('/api/categories/new', CategoryController.newCategory);
  app.get('/api/categories/:id', CategoryController.findOneCategory);
  app.put('/api/categories/:id', CategoryController.updateCategory);
  app.delete('/api/categories/:id', CategoryController.deleteCategory);
}