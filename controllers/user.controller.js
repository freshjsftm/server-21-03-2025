const createError = require('http-errors');
const User = require('../models/User');

module.exports.usersStatistic = async (req, res, next) => {
  try {
    const stat = await User.aggregate([
      { $match: { isMale: false } },
      {
        $facet: {
          countGender: [{ $group: { _id: '$isMale', count: { $sum: 1 } } }],
          statisticAge: [
            {
              $group: {
                _id: null,
                avgAge: { $avg: '$age' },
                minAge: { $min: '$age' },
                maxAge: { $max: '$age' },
              },
            },
          ],
        },
      },
    ]);
    // stat[0].countGender = stat[0].countGender.map((gender) => {
    //   gender._id = gender._id ? 'male' : 'female';
    //   gender.count = gender.count;
    //   return gender;
    // });
    stat[0].countGender = stat[0].countGender.reduce(
      (acc, gender) => {
        gender._id ? (acc.male = gender.count) : (acc.female = gender.count);
        return acc;
      },
      { male: 0, female: 0 }
    );
    res.status(200).send({ data: stat });
  } catch (error) {
    next(createError(400, error.message));
  }
};

module.exports.countUsers = async (req, res, next) => {
  try {
    const count = await User.countDocuments(req.filter);
    res.status(200).send({ data: count });
  } catch (error) {
    next(createError(400, error.message));
  }
};

module.exports.createUser = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).send({ data: newUser });
  } catch (error) {
    next(createError(400, error.message));
  }
};

module.exports.findAllUsers = async (req, res, next) => {
  try {
    const { limit, skip } = req.pagination;
    const users = await User.find(req.filter).skip(skip).limit(limit);
    res.status(200).send({ data: users });
  } catch (error) {
    next(error);
  }
};

module.exports.findUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.idUser);
    if (!user) {
      return next(createError(404, 'user not found'));
    }
    res.status(200).send({ data: user });
  } catch (error) {
    next(createError(400, error.message));
  }
};

module.exports.updateUserById = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.idUser,
      req.body,
      { new: true }
    );
    if (!updatedUser) {
      return next(createError(404, 'user not found'));
    }
    res.status(200).send({ data: updatedUser });
  } catch (error) {
    next(createError(400, error.message));
  }
};

module.exports.deleteUserById = async (req, res, next) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.idUser);
    if (!deletedUser) {
      return next(createError(404, 'user not found'));
    }
    res.status(200).send({ data: deletedUser });
  } catch (error) {
    next(createError(400, error.message));
  }
};
