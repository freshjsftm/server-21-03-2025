const createError = require('http-errors');
const Book = require('../models/Book');

module.exports.countBooks = async (req, res, next) => {
  try {
    const count = await Book.countDocuments(req.filter);
    res.status(200).send({ data: count });
  } catch (error) {
    next(createError(400, error.message));
  }
};

module.exports.createBook = async (req, res, next) => {
  try {
    const newBook = await Book.create(req.body);
    res.status(201).send({ data: newBook });
  } catch (error) {
    next(createError(400, error.message));
  }
};

module.exports.findAllBooks = async (req, res, next) => {
  try {
    const {limit, skip} = req.pagination;
    
    const books = await Book.find(req.filter).skip(skip).limit(limit);
    res.status(200).send({ data: books });
  } catch (error) {
    next(error);
  }
};

module.exports.findBookById = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.idBook);
    if (!book) {
      return next(createError(404, 'book not found'));
    }
    res.status(200).send({ data: book });
  } catch (error) {
    next(createError(400, error.message));
  }
};

module.exports.updateBookById = async (req, res, next) => {
  try {
  } catch (error) {
    next(createError(400, error.message));
  }
};

module.exports.deleteBookById = async (req, res, next) => {
  try {
  } catch (error) {
    next(createError(400, error.message));
  }
};
