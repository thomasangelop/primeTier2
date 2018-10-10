console.log('js sourced');

$(document).ready(onReady);

function onReady(){
    console.log('jQuery ready');
    $('#btn-add').on('click', addMovie);
    getAllMovies();
}

function  addMovie(event) {
    event.preventDefault();
    let newTitle = $('#in-title').val();
    let newGenre = $('#in-genre').val();
    console.log(`Adding movie title: ${newTitle} genre: ${newGenre}.`);

    //send the movie to the server using Ajax!
    // Use a POST request to add something to the sever
    $.ajax({
        method: 'POST',
        url: '/movies',
        data: {
            title: newTitle,
            genre: newGenre,
        }
    }).then(function(response){
        console.log('Added the movie');
        // Ask the server for all the movies again and update DOM
        getAllMovies();
        // Clear inputs
        $('input').val('');
    }).catch(function(error){
        console.log('Error adding to sever');
        
    })
    
}

function getAllMovies() {
    // we are going to use jquery's .ajax method to request 
    // the mvoies from our server 
    // - This is a GET request.
    // - The request is made to /movies
    $.ajax({
        method: 'GET',
        url: '/movies'
    })
    // .then is what happens when the server request comes back  successfully
    .then( function(response){
        console.log('reponse:', response);
        // the response is the array of movies
        showAllMovies(response);
    }) 
    // .catch happens if server request does not come back successful
    .catch( function (error) {
        console.log('Error in request to server for movies.', error);
    })

    // this *may* ( or may not) happne before the server responds
    // you may see the console log for this and the reponse in 
    // either order because ajax is asynchronous 
    console.log('in code after ajax call');
    
}

function showAllMovies(movieArray){
    $('#movies').empty();
    for (let movie of movieArray){
        $('#movies').append(`
        <tr>
          <td>${movie.title}</td>
          <td>${movie.genre}</td>
        </tv>
        `)
    }
}