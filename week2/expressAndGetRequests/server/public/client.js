console.log('js sourced');

$(document).ready(onReady);

function onReady(){
    console.log('jQuery ready');
    getAllMovies();
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
    for (let movie of movieArray){
        $('#movies').append(`
        <tr>
          <td>${movie.name}</td>
          <td>${movie.genre}</td>
        </tv>
        `)
    }
}