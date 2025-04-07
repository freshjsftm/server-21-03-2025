const createError = require('http-errors');
const Homework = require('../models/Homework');

module.exports.createHomework = async (req, res, next) => {
  try {
    const newHomework = await Homework.create(req.body);
    res.status(201).send({ data: newHomework });
  } catch (error) {
    next(createError(400, error.message));
  }
};

module.exports.findAllHomeworks = async (req, res, next) => {
  try {
    const { subject, task, deadline } = req.query;
    const filter = {};
    if (subject) {
      filter.subject = new RegExp(subject, 'i');
    }
    if (task) {
      filter.task = new RegExp(task, 'i');
    }
    if (deadline) {
      filter.deadline = { $lte: deadline };
    }
    const homeworks = await Homework.find(filter);
    res.status(200).send({ data: homeworks });
  } catch (error) {
    next(error);
  }
};

module.exports.findHomeworkById = async (req, res, next) => {
  try {
    const homework = await Homework.findById(req.params.idHomework);
    if (!homework) {
      return next(404, 'homework not found');
    }
    res.status(200).send({ data: homework });
  } catch (error) {
    next(createError(400, error.message));
  }
};

module.exports.updateHomeworkById = async (req, res, next) => {
  try {
    const updatedHomework = await Homework.findByIdAndUpdate(
      req.params.idHomework,
      req.body,
      { new: true }
    );
    if (!updatedHomework) {
      return next(404, 'homework not found');
    }
    res.status(200).send({ data: updatedHomework });
  } catch (error) {
    next(createError(400, error.message));
  }
};

module.exports.deleteHomeworkById = async (req, res, next) => {
  try {
    const deletedHomework = await Homework.findByIdAndDelete(
      req.params.idHomework
    );
    if (!deletedHomework) {
      return next(404, 'homework not found');
    }
    res.status(200).send({ data: deletedHomework });
  } catch (error) {
    next(createError(400, error.message));
  }
};
