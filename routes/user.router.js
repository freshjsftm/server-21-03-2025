const express = require('express');
const {
  createUser,
  findAllUsers,
  findUserById,
  updateUserById,
  deleteUserById,
  countUsers,
  usersStatistic
} = require('../controllers/user.controller');
const { validateUser, validateUserQuery, buildUsersFilter } = require('../middlewares/user.mw');
const { userSchemaPost, userSchemaUpdate, userSchemaQuery } = require('../validations/user.validation');
const { paginate } = require('../middlewares/pagination.mw');

const userRouter = express.Router();

userRouter.post('/', validateUser(userSchemaPost) , createUser);
userRouter.get('/', paginate, validateUserQuery(userSchemaQuery), buildUsersFilter,  findAllUsers);

userRouter.get('/count', validateUserQuery(userSchemaQuery), buildUsersFilter, countUsers);
userRouter.get('/stat', usersStatistic);

userRouter.get('/:idUser', findUserById);
userRouter.patch('/:idUser',validateUser(userSchemaUpdate), updateUserById); 
// userRouter.put('/:idUser', updateUserById); 
userRouter.delete('/:idUser', deleteUserById);

module.exports = userRouter;