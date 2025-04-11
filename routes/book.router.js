const express = require('express');
const {
  createBook,
  findAllBooks,
  findBookById,
} = require('../controllers/book.controller');
const { validateBook, validateBookQuery } = require('../middlewares/book.mw');
const {
  bookSchemaPost,
  bookSchemaQuery,
} = require('../validations/book.validation');
const { paginate } = require('../middlewares/pagination.mw');

const bookRouter = express.Router();

bookRouter.post('/', validateBook(bookSchemaPost), createBook);
bookRouter.get('/',paginate, validateBookQuery(bookSchemaQuery), findAllBooks);
bookRouter.get('/:idBook', findBookById);
//bookRouter.patch('/:idBook' , validateBook(bookSchemaUpdate) , updateBookById)

module.exports = bookRouter;
