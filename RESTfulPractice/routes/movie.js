var express = require('express');
var router = express.Router();
let fetch = require('node-fetch');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Happy Birthday' });
});

router.all('/getMovie', function(req, res, next) {
    let name = "";
    if(req.method == "POST"){
        name = req.body.name;
    } else{
        name = req.query.name;
    }
    let moviePage = "";
    let fetchURL = 'http://www.omdbapi.com?apikey=451cd139&t=' + name;
    console.log(fetchURL);
    fetch(fetchURL).then(r => r.json()).then(body => {moviePage += "<h1>" +
             body.Title + "</h1><hr><img src='" + body.Poster + "'><hr><h2>Actors</h2><hr>";
             body.Actors.split(",").forEach(actor => {
                 moviePage += actor + "<br>";
             })
             res.send(moviePage);});
});

router.all('/searchMovie', function(req, res, next) {
    let name = "";
    if(req.method == "POST"){
        name = req.body.name;
    } else{
        name = req.query.name;
    }
    let p = "1";
    if (req.body.p){
        p = req.body.p;
    }
    if (req.query.p){
        p = req.query.p;
    }
    p = parseInt(p);
    //(if p/2 > 10)  p+- 1,2,3,4,5,10, (total-p)/2
    var moviePage = "";
    let fetchURL = 'http://www.omdbapi.com?apikey=451cd139&s=' + name  + "&page=" + p;
    console.log(fetchURL);
    fetch(fetchURL).then(r => r.json()).then(body => {    
            let totPages = Math.ceil(parseInt(body.totalResults)/10);
            // if (p > 1){
            //     moviePage += "<a href=/movie/searchMovie?name=" + name  + "&p=" + 
            //                 (p - 1) + ">Page " + (p - 1) + "</a>";
            // }
            // moviePage += " | ";
            // if(p <= totPages){
            // moviePage += "<a href=/movie/searchMovie?name=" + name  + "&p=" + 
            // (p + 1) + ">Page " + (p + 1) + "</a>";
            // }
            // moviePage += " | " + totPages + " Pages <hr>";
            for(let i = 1; i <= totPages; i++){
                if(i == p){
                    moviePage += "*"+i+"*|";
                }
                else if(i == totPages){
                    moviePage += "<a href=/movie/searchMovie?name=" + name  + "&p=" + i + ">" + i + "</a>";
                }
                else if(i == 1){
                    moviePage += "<a href=/movie/searchMovie?name=" + name  + "&p=" + i + ">" + i + "</a>|";
                }
                else if((i == (p - 10)) || (i == (p + 10))){
                    moviePage += "<a href=/movie/searchMovie?name=" + name  + "&p=" + i + ">" + i + "</a>|";
                }
                else if((i > (p - 5) && i < (p + 5)) && i != p){
                    moviePage += "<a href=/movie/searchMovie?name=" + name  + "&p=" + i + ">" + i + "</a>|";
                }
                else if(i == Math.floor((totPages - p)/2)+p){
                    moviePage += "<a href=/movie/searchMovie?name=" + name  + "&p=" + i + ">" + i + "</a>|";
                }
                else if(i == Math.floor(p/2)){
                    moviePage += "<a href=/movie/searchMovie?name=" + name  + "&p=" + i + ">" + i + "</a>|";
                }
            }  
            moviePage += "<hr>"; 

            body.Search.forEach(item => {
            moviePage += "<h1><a href=\"/movie/getMovie?name=" + item.Title + "\">" + item.Title + "</a>";
            if(item.Poster) {
                moviePage += "</h1><hr><img src='" + item.Poster + "'><hr>"; 
            }
            });
            for(let i = 1; i <= totPages; i++){
                if(i == p){
                    moviePage += "*"+i+"*|";
                }
                else if(i == totPages){
                    moviePage += "<a href=/movie/searchMovie?name=" + name  + "&p=" + i + ">" + i + "</a>";
                }
                else if(i == 1){
                    moviePage += "<a href=/movie/searchMovie?name=" + name  + "&p=" + i + ">" + i + "</a>|";
                }
                else if((i == (p - 10)) || (i == (p + 10))){
                    moviePage += "<a href=/movie/searchMovie?name=" + name  + "&p=" + i + ">" + i + "</a>|";
                }
                else if((i > (p - 5) && i < (p + 5)) && i != p){
                    moviePage += "<a href=/movie/searchMovie?name=" + name  + "&p=" + i + ">" + i + "</a>|";
                }
                else if(i == Math.floor((totPages - p)/2)+p){
                    moviePage += "<a href=/movie/searchMovie?name=" + name  + "&p=" + i + ">" + i + "</a>|";
                }
                else if(i == Math.floor(p/2)){
                    moviePage += "<a href=/movie/searchMovie?name=" + name  + "&p=" + i + ">" + i + "</a>|";
                }
            }  
            res.send(moviePage);
        });
});
//
router.get('/newSearchMovie', function(req, res, next) {
    let name = req.query.name;
    var moviePage = "";
    let ids = [];
    ids.push("test");
    let fetchURL = 'http://www.omdbapi.com?apikey=451cd139&s=' + name;
    let detailURL = "";
    console.log(fetchURL);
    fetch(fetchURL).then(r => r.json()).then(body => {      
             body.Search.forEach(item => {
               ids.push(item.imdbID);
               //console.log(item.imdbID);
             });
             //ids.forEach(id => {console.log(id);});
        }).then(t => {
            ids.forEach(id => {
                console.log(id);});
            res.send(ids);
        });
    
    ids.forEach(id => {console.log(id);});
});



/*
detailURL = 'http://www.omdbapi.com?apikey=451cd139&i=' + item.imdbID;
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
