const Homework = require('../models/Homework');

module.exports.createHomework = async (req, res, next) => {
  try {
    const newHomework = await Homework.create(req.body);
    res.status(201).send({ data: newHomework });
  } catch (error) {
    next(error);
  }
};

module.exports.findAllHomeworks = async (req, res, next) => {
  try {
    const homeworks = await Homework.find();
    res.status(200).send({ data: homeworks });
  } catch (error) {
    next(error);
  }
};

module.exports.findHomeworkById = async (req, res, next) => {
  try {
    const homework = await Homework.findById(req.params.idHomework);
    if (!homework) {
      return res.status(404).send('Homework not found');
    }
    res.status(200).send({ data: homework });
  } catch (error) {
    next(error);
  }
};
module.exports.updateHomeworkById = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
module.exports.deleteHomeworkById = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
