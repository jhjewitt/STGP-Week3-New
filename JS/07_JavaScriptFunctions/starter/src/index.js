const movies = [
    {"title": "Jaws", "director": "Steven Spielberg", "year": "1975"},
    {"title": "Star Wars", "director": "George Lucas", "year": "1977"},
    {"title": "Avengers: Infinity War", "director": "Anthony and Joe Russo", "year": "2018"},
    {"title": "Top Gun", "director": "Tony Scott", "year": "1986"},
    {"title": "Justice League", "director": "Zack Snyder", "year": "2017"}
];

// Part 1 - Create a function to find a movie and output it's detail
/*
function findMovie(movieTitle){
    //console.log(movieTitle)
    for(let movie of movies){
        if(movie.title == movieTitle){
            console.log('title:', movie.title, '\ndirected by:', movie.director, '\nreleased in:', movie.year)
        }
    }
}       

findMovie('Star Wars');

let movie = 'Thor: Ragnarok'
console.log(movie)
findMovie(movie)
*/

// Part 2 = Create a function to return a movie object

function returnMovie(movieTitle){
    for(let movie of movies){
        if(movie.title == movieTitle){
            console.log(movie)
            return movie;
        }
    }
    return 'movie not in list';
}

let myMovie = returnMovie('Avengers: Infinity War')
console.log(myMovie)
console.log('film:', myMovie.title, '\ndirected by:', myMovie.director)

let myOtherMovie = returnMovie('Thor: Ragnorok')
console.log(myOtherMovie)

function myMovieDetails(anyMovie){
    if(typeof(anyMovie) == 'object'){
        return 'film:', anyMovie.title, '\ndirected by:', anyMovie.director;
    } else {
        return anyMovie;
    }
}

console.log(myMovieDetails(myOtherMovie));
console.log(myMovieDetails(returnMovie('Jaws')))