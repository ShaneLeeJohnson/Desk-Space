const { Schema, model } = require('mongoose');

const flashcardSchema = new Schema({
  question: {
    type: String,
    required: 'Enter queston!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  answer: {
    type: String,
    required: 'Enter answer!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
});

const Flashcard = model('Flashcard', flashcardSchema);

module.exports = Flashcard;
