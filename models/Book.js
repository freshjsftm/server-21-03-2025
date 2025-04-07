const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
  title:{
    type: String,
    required: true,
    trim: true,
    minLength: 2,
    maxLength: 255,
  },
  author:{
    type: String,
    required: true,
    trim: true,
    minLength: 3,
    maxLength: 64,
  },
  genre:{
    type: String,
    required: true,
    trim: true,
    enum: ["Fiction", "Non-fiction", "Fantasy", "Science Fiction", "Mystery", "Biography", "History"],
  },
  year:{
    type: Number,
    required: true,
    min: 1200,
    max: new Date().getFullYear(),
  },
  available:{
    type: Boolean,
    default: true,
  }
})

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;