var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/find', function(req, res, next) {
  let today = new Date();
  res.render('post', { title: 'Post', date: today.toDateString(), school: "Edge Tech Academy"});
});

router.post('/find', function(req, res, next) {
  let today = new Date();
  let sentance = req.body.text3.split(" ");
  let word = req.body.findWord;
  let retVal = "";
  for(let i in sentance){
    if(sentance[i] === word){
      retVal = word + " was word number " + i;
    }
  }
  if(retVal === ""){
    retVal = word + " was not found";
  }
  res.render('post', { title: 'Post', date: today.toDateString(), school: "Edge Tech Academy", findResult: retVal});
});

module.exports = router;
