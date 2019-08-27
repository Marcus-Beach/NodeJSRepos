//index.js
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , param: req.query.first, name: 'Marcus', dateTime: getDateString(), randomNum: getRandomInt(100)});
});

//returns a string containing the date
function getDateString() {
  let today = new Date();
  return (today.getMonth() + "/" + today.getDate() + "/" + today.getFullYear() + " " +
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds());
}

function getRandomInt(max){
  return Math.floor(Math.random() * max);
}

/* GET home page. */
router.get('/time', function(req, res, next) {
  res.render('time', { dateTime: getDateString()});
});


module.exports = router;
//end index.js