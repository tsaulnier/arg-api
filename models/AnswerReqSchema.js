const mongoose = require('mongoose');

const AnswerReqSchema = mongoose.Schema({
  hash: { //the hash the user scans to submit the answer
    type: String,
    required: true
  },
  coord: { //the location of the user's device, to compare to the hash's known location
    north: {
      type: Number,
      required: true
    },
    west: {
      type: Number,
      required: true
    }
  },
  answer: { //the answer the user submits
    type: String,
    required: true
  }
});

module.exports = mongoose.model('AnswerReqSchema', AnswerReqSchema, 'answers');
