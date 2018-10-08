console.log('js');

let moviesArray = [];

class Movie {
    constructor(title, year, director){
        this.title = title;
        this.year = year;
        this.director = director;
    }
}

$('document').ready(onReady);

function onReady(){
    console.log('JQ');
    $('#addNewMovie').on('click', addMovie);
    //find something already on the page with movieList id
    $('#movieList').on('click', '.lendMovie', lendMovie);

    // . = class and class is best to use since it can only be used once 
    $('#movieList').on('click', '.deleteMovie', deleteMovie);
}

// add movie function

function addMovie() {
    // event.preventDefault adds to console and prevents repeats
    event.preventDefault();
    console.log('button clicked!');
    let titleIn = $('#title').val();
    let yearIn = $('#year').val();
    let directorIn = $('#director').val();
    // new instance of class using information from the form 
    let newMovie = new Movie(titleIn, yearIn, directorIn);
    moviesArray.push(newMovie);
    console.log(moviesArray);

    //call function to append movie list
    appendMovieList();
}

// appending!

function appendMovieList() {
    let element = $('#movieList');
    element.empty();
    for(let movie of moviesArray) {
        console.log(movie);
        element.append(`<li>` + movie.title + ` ` + movie.year + ` ` + movie.director + 
        `<button class="lendMovie">Lend</button>
        <button class="deleteMovie">Delete</button></liv>`);
    

    }
}

// lending!

function lendMovie(){
    console.log('lend clicked!');
    //this is from the button being clicked 
    $(this).parent().toggleClass('yellow');
    
}

// delete!

function deleteMovie() {
    console.log('delete!');
    let selectedItem = $(this).parent().text();
    console.log(selectedItem);
    for(let i = 0; i < moviesArray.length; i++){
        if(selectedItem.includes(moviesArray[i].title)){
            console.log('delete me!');
            moviesArray.splice(i, 1);
            $(this).parent().remove();
        }
    }
}