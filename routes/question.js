const express = require('express');
const router = express.Router();
const QuestionReqSchema = require('../models/QuestionReqSchema');
const TagSchema = require('../models/TagSchema');

//POST A TAG TO DB
router.post('/', async (req,res) => {
   // console.log(req.body);
  const newQuestion = new QuestionReqSchema({
    hash: req.body.hash,
    coord: {
       north: req.body.coord.north,
       west: req.body.coord.west
    }
  });
  try{
  // LOGIC FOR QUESTION QUERY IN DB
  const serverQuery = await TagSchema.find({}, { projection : { hash: newQuestion.hash, coord: newQuestion.coord });
  const strippedResponseToUser = new TagSchema ({
    city: null,
    desc: null,
    hash: null,
    coord: {
       north: null,
       west: null
    },
    nextCoord: {
       north: null,
       west: null
    },
    quest: serverQuery.quest, //only supply the question to answer
    ans: null
  });
  res.json(strippedResponseToUser);
}catch(err) {
  res.json({ message: err });
}
});

module.exports = router;
