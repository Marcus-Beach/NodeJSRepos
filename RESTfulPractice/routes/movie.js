var express = require('express');
var router = express.Router();
let fetch = require('node-fetch');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Happy Birthday' });
});

router.get('/getMovie', function(req, res, next) {
    let name = req.query.name;
    let moviePage = "";
    let fetchURL = 'http://www.omdbapi.com?apikey=86c39163&t=' + name;
    console.log(fetchURL);
    fetch(fetchURL).then(r => r.json()).then(body => {moviePage += "<h1>" +
             body.Title + "</h1><hr><img src='" + body.Poster + "'><hr><h2>Actors</h2><hr>";
             body.Actors.split(",").forEach(actor => {
                 moviePage += actor + "<br>";
             })
             res.send(moviePage);});
});

router.get('/searchMovie', function(req, res, next) {
    let name = req.query.name;
    var moviePage = "";
    let fetchURL = 'http://www.omdbapi.com?apikey=86c39163&s=' + name;
    console.log(fetchURL);
    fetch(fetchURL).then(r => r.json()).then(body => {      
             body.Search.forEach(item => {
                moviePage += "<h1>" + item.Title;
                if(item.Poster) {
                    moviePage += "</h1><hr><img src='" + item.Poster + "'><hr>"; 
                }
             });
             res.send(moviePage);
        });
});

router.get('/newSearchMovie', function(req, res, next) {
    let name = req.query.name;
    var moviePage = "";
    let ids = [];
    ids.push("test");
    let fetchURL = 'http://www.omdbapi.com?apikey=86c39163&s=' + name;
    let detailURL = "";
    console.log(fetchURL);
    fetch(fetchURL).then(r => r.json()).then(body => {      
             body.Search.forEach(item => {
               ids.push(item.imdbID);
               //console.log(item.imdbID);
             });
             //ids.forEach(id => {console.log(id);});
        }).then(t => {
            ids.forEach(id => {console.log(id);});
            res.send(ids);
        });
    
    ids.forEach(id => {console.log(id);});
});



/*
detailURL = 'http://www.omdbapi.com?apikey=86c39163&i=' + item.imdbID;
                fetch(detailURL).then(re => re.json()).then(det => {
                    if(det.Actors){
                        moviePage += "<h2>Actors</h2><hr>";
                        det.Actors.split(",").forEach(actor => {
                            moviePage += actor + "<br>";
                        });
                    }
                });
                */
module.exports = router;
