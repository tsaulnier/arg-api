const express = require('express');
const router = express.Router();
const TagSchema = require('../models/TagSchema');

//GET TAGS FROM DB
router.get('/', async (req,res) => {
  try{
    const tags = await TagSchema.find();
    res.json(tags);
  }catch(err){
    res.json({message: err});
  }
});

//POST A TAG TO DB
router.post('/', async (req,res) => {
   // console.log(req.body);
  const newTag = new TagSchema({
    city: req.body.city,
    desc: req.body.desc,
    hash: req.body.hash,
    coord: {
       north: req.body.coord.north,
       west: req.body.coord.west
    },
    nextCoord: {
       north: req.body.nextCoord.north,
       west: req.body.nextCoord.west
    },
    quest: req.body.quest,
    ans: req.body.ans
  });
  try{
  const savedTag = await newTag.save();
  res.json(savedTag);
}catch(err) {
  res.json({ message: err });
}
});

//DELETE TAG IN DB
router.delete('/:id', async (req,res) => {
  try{
    const removedTag = await TagSchema.deleteOne({ _id: req.params.id });
    res.json(removedTag);
  }catch(err){
    res.json({ message: err });
  }
});

//UPDATE TAG IN DB (optional implemention [imcomplete])
// router.patch('/:id', async (req,res) => {
//   try{
//     const updatedTag = await TagSchema.findById(req.params.id);
//     res.json(updatedTag);
//   }catch(err){
//     res.json({ message: err });
//   }
// });

module.exports = router;
