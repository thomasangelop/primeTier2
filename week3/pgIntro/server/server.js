const express = require('express');
const bodyParser = require('body-parser');

// Node Module that will connect to postgesql
const pg = require('pg');

// Setup PG to connect to database
const Pool = pg.Pool;
const pool = new Pool({
    database: 'songs', //database name (this will change)
    host: 'localhost',
    port: 5432,         // port for dining the database
    max: 10,            // max number of connections for the pool
    idleTimeoutMillis: 30000 //30 seconds before timeout/cancel query
});


pool.on('connect', () => {
    console.log('Connected to the database');
});

pool.on('error', (error) => {
    console.log('Error with database', error);
});

// Setup express as usual 
const app = express();

// Setup body-parser 
app.use(bodyParser.urlencoded( { extended:true } ) );
app.use(bodyParser.json( ) );

// Static files
app.use( express.static('public/static') );

//set GET route to get all songs from database
app.get('/songs', (req, res) => {
    // When you fetch all things in these GET routes, storngly 
    //encourage ORDER BY
    // so that things always come back in a consistent order 
    const sqlText = `SELECT * FROM songs ORDER BY published, track, artist DESC;`;
    pool.query(sqlText)
        .then ((result) => {
            console.log(`Got stuff back from the database`, result);
            res.send(result.rows);
            
        }).catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always respondeds
            
        });
});

//set up POST route to add a new song to the database

const port = process.env.PORT || 5000;
app.listen( port, () => {
    console.log('up and running on port', port);
    
} )