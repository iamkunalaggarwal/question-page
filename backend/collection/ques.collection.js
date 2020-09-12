const mongoose = require('mongoose');

let tagEnum = require('./tagEnum');

const Schema = mongoose.Schema;


const quesSchema = new Schema({
  topic: {
    type: String,
    required: true,
    unique: false,
    trim: true,
    enum: ['usa', 'engineering', 'top','stanford-university', 'usa', 'admission', 'qualifying-criteria','top-colleges'],
    minlength: 3
  },

  ques: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  tag: {
    type:[String],
    enum: tagEnum,
    unique: false
  }
});

const question = mongoose.model('question', quesSchema);

module.exports = question;
