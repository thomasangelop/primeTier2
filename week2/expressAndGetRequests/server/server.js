const express = require('express');

const app = express();

// This is needed to get data from Ajax, just always put it here. 
const bodyParser = require('body-parser');

app.use( bodyParser.urlencoded( {extended: true} ));

app.use( express.static( 'server/public' ) );

// Set-up array of movies to serve/send back to the clients browser
const movies = [
    {
        title: 'The Princess Bride',
        genre: 'romcom'
    },
    {
        title: 'Harry Potter',
        genre: 'fantasy'
    },
    {
        title: 'Ferris Bueler\'s Day Off',
        genre: 'comedy'
    },
    {
        title: 'Hush',
        genre: 'thriller'
    },
    {
        title: 'Black Panther',
        genre: 'action'
    }
]

// Send back all the movies when a request is made to /movies
// app.get because it is a GET request

// app.get('/movies', function(req, res) {
//     console.log('Get request for all movies');
//     res.send(movies);
// });

//server only arrow functions 
app.get('/movies', (req, res) => {
    console.log('Get request for all movies');
    res.send(movies);
});

//make app.post to tie to POST method in ajax
app.post('/movies', function(req, res){
    console.log('POST request to add movie');
    // Client is sending that movie information as the data 
    // On the server, data is the request body (req.body)
    let newMovie = req.body;
    console.log('New movie:', newMovie);
    //Include DEPENDENCY FOR BODY AT TOP
    movies.push(newMovie);
    // 201 is a create status - tell browser things were successful
    res.sendStatus(201);
})

// const port = 5000;
// app.listen( port, function() {
//     console.log(`Express is listening on port ${port}...`);
// });

//server only arrow functions 
const port = 5000;
app.listen( port, () => {
    console.log(`Express is listening on port ${port}...`);
});