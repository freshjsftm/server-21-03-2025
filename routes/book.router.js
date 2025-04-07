const express = require('express');
const { createBook, findAllBooks, findBookById } = require('../controllers/book.controller');

const bookRouter = express.Router();

bookRouter.post('/', createBook);
bookRouter.get('/', findAllBooks);
bookRouter.get('/:idBook', findBookById);


module.exports = bookRouter;
