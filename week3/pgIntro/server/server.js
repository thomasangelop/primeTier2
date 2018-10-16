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

const port = process.env.PORT || 5000;
app.listen( port, () => {
    console.log('up and running on port', port);
    
} )