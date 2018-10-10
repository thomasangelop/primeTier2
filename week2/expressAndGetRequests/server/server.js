const express = require('express');

const app = express();

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

// const port = 5000;
// app.listen( port, function() {
//     console.log(`Express is listening on port ${port}...`);
// });

//server only arrow functions 
const port = 5000;
app.listen( port, () => {
    console.log(`Express is listening on port ${port}...`);
});