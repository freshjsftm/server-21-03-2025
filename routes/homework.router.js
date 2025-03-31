const express = require('express');
const {
  createHomework,
  findAllHomeworks,
  findHomeworkById,
  updateHomeworkById,
  deleteHomeworkById,
} = require('../controllers/homework.controller');

const homeworkRouter = express.Router();

homeworkRouter.post('/', createHomework);
homeworkRouter.get('/', findAllHomeworks);
homeworkRouter.get('/:idHomework', findHomeworkById);

module.exports = homeworkRouter;
