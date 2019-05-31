var express = require('express');
var router = express.Router();
var list = require('../data/todo');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Unit 2 Assessment' , list: list.list });
});

router.post('/create', function(req, res){
  todo = req.body.todo;
  done = req.body.done; 
  todoItem = ((todo) + " - " + (done)); 
  list.list.push(todoItem);
  
  list.save
  console.log(list);
  res.redirect('/');
});

// router.post('/delete', function(req, res){
//   list.pull(req.body);
// })

module.exports = router;
