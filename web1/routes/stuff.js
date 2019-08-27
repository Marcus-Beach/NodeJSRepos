//stuff.js for time.js
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('time', { dateTime: getDateString()});
});

//returns a string containing the date
function getDateString() {
    let today = new Date();
    return (today.getMonth() + "/" + today.getDate() + "/" + today.getFullYear() + " " +
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds());
}

module.exports = router;
//end stuff.js for time.js