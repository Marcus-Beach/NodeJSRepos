document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("searchButton").addEventListener("click", function (){
        let fetchURL = 'http://www.omdbapi.com?apikey=451cd139&s=' + document.getElementById("searchText").value;
        fetch(fetchURL).then(r => r.json()).then(body => {
            let movieList = document.getElementById("movies");
            movieList.innerHTML = "";
            let movieInfo = document.getElementById("movieInfo");
            let movies = body.Search;
            movies.forEach(movie => {
                movieList.appendChild(SetMovieItem(movie, movieInfo));
            })
        });
    });
    document.addEventListener("keydown", function(key){
        let text = document.getElementById("searchText").value;
        if(text != "" && key.code == "Enter"){
            let fetchURL = 'http://www.omdbapi.com?apikey=451cd139&s=' + document.getElementById("searchText").value;
            fetch(fetchURL).then(r => r.json()).then(body => {
                let movieList = document.getElementById("movies");
                movieList.innerHTML = "";
                let movieInfo = document.getElementById("movieInfo");
                let movies = body.Search;
                movies.forEach(movie => {
                    movieList.appendChild(SetMovieItem(movie, movieInfo));
                })
            });
        }
    });
});

//returns a div reference
function SetMovie(movieJson){
    let ratingsString = "";
    let actorString = "";
    //create elements
    let movie = document.createElement("div");
    let movieTitle = document.createElement("div");
    let moviePoster = document.createElement("img");
    let moviePlot = document.createElement("div");
    let movieActors = document.createElement("div");
    let movieRatings = document.createElement("div");

    //set elements
    movieTitle.innerHTML = movieJson.Title; //set title
    movieTitle.className = "title";
    moviePlot.innerHTML = "<hr><b>Plot:</b><br>" + movieJson.Plot; //set plot
    moviePlot.className = "plot";
    moviePoster.src = movieJson.Poster; //set poster
    moviePoster.className = "poster";
    movieJson.Actors.split(",").forEach(actor => {
        actorString += actor + "<br>";
    }); //pull actors out of string
    movieActors.innerHTML = "<hr><b>Actors:</b><br>" + actorString; //set actors
    movieActors.className = "actors";
    movieJson.Ratings.forEach(rating => {
        ratingsString += rating.Source + ": " + rating.Value + "<br>";
    });
    movieRatings.innerHTML = "<hr><b>Ratings:</b><br>" + ratingsString; //set ratings
    movieRatings.className = "ratings";
    movie.className = "movie";
    movie.appendChild(movieTitle);
    movie.appendChild(moviePoster);
    movie.appendChild(moviePlot);
    movie.appendChild(movieActors);
    movie.appendChild(movieRatings);

    return movie;
}

//returns a div reference
function SetMovieItem(moviesJson, infoElement){
    //create elements
    let movie = document.createElement("div");
    let movieTitle = document.createElement("div");
    let moviePoster = document.createElement("img");

    //set elements
    movieTitle.innerHTML = moviesJson.Title; //set title
    movieTitle.className = "title";
    moviePoster.src = moviesJson.Poster; //set poster
    moviePoster.className = "poster";
    moviePoster.addEventListener("mouseover",function(){
        infoElement.innerHTML = "";
        let fetchURL = 'http://www.omdbapi.com?apikey=451cd139&i=' + moviesJson.imdbID;
        fetch(fetchURL).then(r => r.json()).then(body => {
            infoElement.appendChild(SetMovie(body));
            console.log(body);
        });
    });
    movie.className = "movie";
    movie.appendChild(movieTitle);
    movie.appendChild(moviePoster);

    return movie;
}