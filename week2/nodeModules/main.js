// // Get the movies from the movies module
// let movies = require('./movies.module');

// //log out all the movies
// for(let movie of movies){
//     console.log(movie);
    
// }

//Require in movies module, now I get an object
let moviesModule = require('./movies.module');
console.log('Movies Module gave me', moviesModule);

let moviesArray = moviesModule.movies;
let display = moviesModule.displayMovies;

console.log('Show the movies:');

display(moviesArray);