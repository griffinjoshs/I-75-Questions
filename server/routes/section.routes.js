const SectionController = require('../controllers/section.controller');

module.exports = function(app) {
  app.get('/api/sections', SectionController.getAllSections);
  app.post('/api/sections/new', SectionController.newSection);
  app.get('/api/sections/:id', SectionController.findOneSection);
  app.put('/api/sections/:id', SectionController.updateSection);
  app.delete('/api/sections/:id', SectionController.deleteSection);
}