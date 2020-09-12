const router = require('express').Router();
let question = require('../collection/ques.collection');
var mongoose = require('mongoose');
let tagEnum = require('../collection/tagEnum');

//to get all questions

router.route('/').get((req, res) => {
  question.find()
    .then( questions=>res.json(questions))
    .catch(err => res.status(400).json('Error: ' + err));
});

//to search questions

router.route('/search').post((req, res)=>{
  //input question splited and array of only words is created
  const q = String(req.body.input).split(' ');
  //another array
  var arr = [];

  //searching words that are common in tag enum and input array 
  for (i of q){
    for(j of tagEnum){
      if (i.valueOf()==j.valueOf()){
        // storing the the same word in array
        arr.push(i);
      }
    }
  }
  console.log(arr);
  //finding data with some common words in arr and tag of each entry
  question.find({tag: {$in: arr}})
  .then( questions=>res.json(questions))
  .catch(err => res.status(400).json('Error: ' + err));
});

// to add question
router.route('/add').post((req, res) => {
  const tag = req.body.tag;
  const ques = req.body.ques;
  const topic = req.body.topic;
  console.log(ques);

  const newQues = new question({
    ques,
    topic,
    tag
  });



  newQues.save()
    .then(() => res.json('Question added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;