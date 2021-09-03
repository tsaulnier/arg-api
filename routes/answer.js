const express = require('express');
const router = express.Router();
const AnswerReqSchema = require('../models/AnswerReqSchema');
const TagSchema = require('../models/TagSchema');

//POST A TAG TO DB
router.post('/', async (req,res) => {
   // console.log(req.body);
  const newAnswer = new AnswerReqSchema({
    hash: req.body.hash,
    coord: {
       north: req.body.coord.north,
       west: req.body.coord.west
    },
    ans: req.body.ans
  });
  try{
  // LOGIC FOR ANSWER QUERY IN DB
  const serverQuery = await TagSchema.find({}, { projection : { hash: newAnswer.hash, coord: newAnswer.coord, ans: newAnswer.ans });
  const strippedResponseToUser = new TagSchema ({
    city: null,
    desc: null,
    hash: null,
    coord: {
       north: null,
       west: null
    },
    nextCoord: {
       north: serverQuery.nextCoord.north, //only supply the coordinates to next tag
       west: serverQuery.nextCoord.west
    },
    quest: null,
    ans: null
  });
  res.json(strippedResponseToUser);
  }catch(err) {
  res.json({ message: err });
  }
  });

module.exports = router;
