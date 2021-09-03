const mongoose = require('mongoose');

const TagSchema = mongoose.Schema({
  city: { //the city where the game is located
    type: String,
    required: true
  },
  desc: { //a description of this particular point of interest
    type: String,
    required: true
  },
  hash: { //the hash stored on the tag
    type: String,
    required: true
  },
  coord: { //the known permanent coordinates of the tag
    north: {
      type: Number,
      required: true
    },
    west: {
      type: Number,
      required: true
    }
  },
  nextCoord: { //the known permanent coordinates of the next tag to provide to the user after this tag is solved
    north: {
      type: Number,
      required: true
    },
    west: {
      type: Number,
      required: true
    }
  },
  quest: { //the question to ask the user
    type: String,
    required: true
  },
  ans: { //the answer to the question
    type: String,
    required: true
  }
});

module.exports = mongoose.model('TagSchema', TagSchema, 'tags');
