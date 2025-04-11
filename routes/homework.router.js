const express = require('express');
const {
  createHomework,
  findAllHomeworks,
  findHomeworkById,
  updateHomeworkById,
  deleteHomeworkById,
} = require('../controllers/homework.controller');
const { paginate } = require('../middlewares/pagination.mw');

const homeworkRouter = express.Router();

homeworkRouter.post('/', createHomework);
homeworkRouter.get('/',paginate, findAllHomeworks);
homeworkRouter.get('/:idHomework', findHomeworkById);
homeworkRouter.patch('/:idHomework', updateHomeworkById);
homeworkRouter.delete('/:idHomework', deleteHomeworkById);

module.exports = homeworkRouter;
