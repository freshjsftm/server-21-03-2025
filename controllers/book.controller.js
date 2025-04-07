const Book = require('../models/Book');

module.exports.createBook = async (req, res, next) => {
  try {
    const newBook = await Book.create(req.body);
    res.status(201).send({ data: newBook });
  } catch (error) {
    next(error);
  }
};

module.exports.findAllBooks = async (req, res, next) => {
  try {
    const { title, author, genre, minYear, maxYear, available } = req.query;
    const filter = {};

    if (title) {
      filter.title = new RegExp(title, 'i');
    }
    if (author) {
      filter.author = new RegExp(author, 'i');
    }
    if (genre) {
      filter.genre = new RegExp(genre, 'i');
    }
    if (available) {
      filter.available = available === 'yes';
    }

    if (minYear || maxYear) {
      filter.year = {};
      if (minYear) {
        filter.year.$gte = Number(minYear);
      }
      if (maxYear) {
        filter.year.$lt = Number(maxYear);
      }
    }

    const books = await Book.find(filter);
    res.status(200).send({ data: books });
  } catch (error) {
    next(error);
  }
};

module.exports.findBookById = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.idBook);
    if (!book) {
      return res.status(404).send({ data: 'Book not found' });
    }
    res.status(200).send({ data: book });
  } catch (error) {
    next(error);
  }
};

module.exports.updateBookById = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

module.exports.deleteBookById = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
