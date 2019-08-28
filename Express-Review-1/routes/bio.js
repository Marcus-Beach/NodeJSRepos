var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('bio', { title: "Bio", name: "Marcus Beach", age: "36",  github: "https://github.com/Marcus-Beach"});
});

module.exports = router;
