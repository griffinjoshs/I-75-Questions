const QuestionController = require('../controllers/question.controller');

module.exports = function(app){
  app.get('/api/questions', QuestionController.getAllQuestions);
  app.post('/api/questions/new', QuestionController.newQuestion);
  app.get('/api/questions/:id', QuestionController.findOneQuestion);
  app.put('/api/questions/:id', QuestionController.updateQuestion);
  app.delete('/api/questions/:id', QuestionController.deleteQuestion);
}