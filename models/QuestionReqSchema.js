const mongoose = require('mongoose');

const QuestionReqSchema = mongoose.Schema({
  hash: { //the hash the user scans to obtain the question
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
});

module.exports = mongoose.model('QuestionReqSchema', QuestionReqSchema, 'questions');
