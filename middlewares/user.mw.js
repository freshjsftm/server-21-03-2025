const createError = require('http-errors');

module.exports.validateUser = (userSchema) => async (req, res, next) => {
  try {
    if (Object.keys(req.body).length === 0) {
      return next(createError(400, 'Data not exists'));
    }
    req.body = await userSchema.validate(req.body);
    next();
  } catch (error) {
    next(createError(400, error.message));
  }
};
