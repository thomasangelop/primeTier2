const siriusMovies = [
    'Harry Potter',
    'Case of Benjamin Button',
    'Ace Venture',
    'Groundhog Day', 
    'Willow'
];

function displayMovies(movies){
    for(let movie of movies){
        console.log(movie);
        
    }
}

//make informtation public 
//This is what makes this a module and 
// it says what the other files get when they
// require it in. THey don't get everything in
// this file, only what you put here. 
module.exports = {
    movies: siriusMovies, 
    displayMovies: displayMovies
}
