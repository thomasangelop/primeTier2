console.log('Objects, Arrays, Loops');

// Let's make a movie object 
// It has a name, and a rating

let movie = {
    name: 'Star Wars',
    rating: 9,
    showMovieDetails: function(){
        // 'this' refers to the object iself 
        console.log(`The movie is ${this.name} and it's rating is ${this.rating}`);
    }
}

console.log('Our movie is', movie);

// Object properties accessed with dot notation
console.log(`The movie is ${movie.name} and it's rating is ${movie.rating}`);

// Functions inside an object are called methods
movie.showMovieDetails();

// Objects & const is a little funky
const myFavoriteMovie = {
    name: 'The Princess Bride',
    rating: 10
}

console.log('My fav movie is', myFavoriteMovie);

// Some time has passed
// changing a propert on the object (even with const) is fine 
myFavoriteMovie.name = 'Spirited Away';
console.log('My fav movie is now', myFavoriteMovie);

// this won't work: because it's const 
//myFavoriteMovie = {
//    name: 'Spirited Away', 
//    rating: 10
//}

// Let's add a new property
myFavoriteMovie.watchedOn = new Date();
console.log('My fav movie is now', myFavoriteMovie);

// Arrays are objects so they work the same way

const movieCollection = [];

movieCollection.push({
    name: 'THe Temple of Doom', 
    rating: 8
})

movieCollection.push({
    name: 'Space Balls', 
    rating: 3
})

console.log('my movies', movieCollection);

// Loops

for (let i = 0; i < movieCollection.length; i++){
    console.log(movieCollection[i].name);
}

// Another way to for loop
console.log('Show the movies again');
for ( let movie of movieCollection ){
  console.log(movie.name);
}

console.log('The movie is now', movie);

// our colleciton 
let moviesWithCategories = {
    action: ['Transformers', 'Die Hard', 'Deadpool'],
    romcom: ['Just Friends', 'Sleepless In Seattle', 'When Harry Met Sally']
}


// for of loop for arrays
function displayMovies(arrayOfMovies) {
    for( let movie of arrayOfMovies ){
        console.log(movie);
    }
}

// Get property of object with a variable 
let category = 'action';
// Can't use dot notation - we get undefined, we added a new property
console.log( moviesWithCategories.category );

// use bracket notation 
console.log( 'Bracket notation:', moviesWithCategories[category] );


displayMovies( moviesWithCategories.action );

function showByCategory(collection) {
  // get category which is a property name
  for( category in collection){
      console.log(`${category} Movies:`)    
      let array = collection[category];
      displayMovies(array)
  }
}

showByCategory(moviesWithCategories)