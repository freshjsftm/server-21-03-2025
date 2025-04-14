const express = require('express');
const {
  createBook,
  findAllBooks,
  findBookById,
  countBooks
} = require('../controllers/book.controller');
const {
  validateBook,
  validateBookQuery,
  buildBooksFilter,
} = require('../middlewares/book.mw');
const {
  bookSchemaPost,
  bookSchemaQuery,
} = require('../validations/book.validation');
const { paginate } = require('../middlewares/pagination.mw');

const bookRouter = express.Router();

bookRouter.post('/', validateBook(bookSchemaPost), createBook);
bookRouter.get(
  '/',
  paginate,
  validateBookQuery(bookSchemaQuery),
  buildBooksFilter,
  findAllBooks
);

bookRouter.get(
  '/count',
  validateBookQuery(bookSchemaQuery),
  buildBooksFilter,
  countBooks
);

bookRouter.get('/:idBook', findBookById);
//bookRouter.patch('/:idBook' , validateBook(bookSchemaUpdate) , updateBookById)

module.exports = bookRouter;
