//users.js

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  valString = "";
  for(let prop in req.headers){
    valString += prop + " " + req.headers[prop] + "<br>";
  }
  res.send(valString);
});

router.get('/list', function(req, res, next){
  res.render('users', {'users':users, 'title':'Users'});
});

var User = function(fname, lname, phone) {
  this.FirstName = fname;
  this.LastName = lname;
  this.Phone = phone;
};

var users = [];

router.init = function() {
  users.push(new User('Keith', 'Richards', '801-AC5-2030'));
  users.push(new User('Joe', 'Cocker', '801-FR3-7789'));
  users.push(new User('B.B.', 'King', '202-AAA-2345'));
};

// function showHeaders(req){
//   let retVal;
//   for (var prop in req.headers){
//     retval = prop. + "\n";
//     console.log(retVal);
//   }
//   return retVal;
// }

router.init(); //this is what is actually pushing the data into the array
module.exports = router;
//end users.js
