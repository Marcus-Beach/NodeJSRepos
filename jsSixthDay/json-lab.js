/**
 * Created by Edge Tech Academy on 5/5/2017.
 */
let movie = require('./Casablanca.json');

//  Let's output the casablanca object.
//console.log(movie);

/*--------------------------------------------------------------------------------------------------------------
 *	 Less than fulfilling wasn't it. The greatest movie ever and all we get is
 *	     Object {title: "Casablanca", originalTitle: "", year: "1942", releaseDate: "19430123", directors: Array(1), …}
 *		 But what did we see?
 *	         We can see some of the individual attributes of the object
 *	         when the member contains an Object, the Object does not get 'unwound' 
 *           and 'Object' is displayed
 *	         but you can open it in debug and expand the inner layers
 *           But we have a start. If you need the title you can use the variable
 *           followed by the attribute movie.title
 *           some of the attributes are arrays
 *           movie.genres is an array of the genres War, Dramma, Romance
 *           movie.actors is an array of JSON objects each one is another set of data
 * 
 *------------------------------------------------------------------------------------------------------------*/


//1.
console.log("Title: " + movie.title +
            "\nRelease Date: " + movie.releaseDate +
            "\nPlot: " + movie.simplePlot +
            "\nPoster: " + movie.urlPoster +
            "\nNumber of Actors: " + movie.actors.length +
            "\nNumber of Quotes: " + movie.quotes.length +
            "\nNumber of Trivia Items: " + movie.movieTrivia.length);

//2.
movie.genres.forEach(element => {
    console.log(element);
});

//3.
movie.actors.forEach(element => {console.log(element.actorName + " played " + element.character);});

//4. I know the code is the same, but it's just so elegant now that I've seen it I can't bear to change it.
function randomInt(randMax){
    return Math.floor(Math.random() * randMax);
}

//5.
let num = randomInt(movie.actors.length);
console.log("Name:" + movie.actors[num].actorName +
            "\nProfile:" + movie.actors[num].urlProfile +
            "\nPhoto:" + movie.actors[num].urlPhoto +
            "\nActorID:" + movie.actors[num].actorId +
            "\nPlayed " + (movie.actors[num].main ? "Main" : "Side") + " Character:" + movie.actors[num].character );

//6.
console.log(movie.movieTrivia[randomInt(movie.movieTrivia.length)]);

//7.
movie.quotes[randomInt(movie.quotes.length)].quote.forEach(element => {console.log(element);});

//8.
console.log("\"" + movie.movieTrivia[119] + "\"")
