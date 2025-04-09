const express = require('express');
const {
  createBook,
  findAllBooks,
  findBookById,
} = require('../controllers/book.controller');
const { validateBook } = require('../middlewares/book.mw');
const { bookSchemaPost } = require('../validations/book.validation');

const bookRouter = express.Router();

bookRouter.post('/', validateBook(bookSchemaPost), createBook);
bookRouter.get('/', findAllBooks);
bookRouter.get('/:idBook', findBookById);
//bookRouter.patch('/:idBook' , validateBook(bookSchemaUpdate) , updateBookById)

module.exports = bookRouter;
