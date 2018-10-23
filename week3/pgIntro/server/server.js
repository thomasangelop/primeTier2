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
app.use( express.static('server/public') );

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
app.post('/songs', (req, res) => {
    const newSong = req.body;
    const sqlText = `INSERT INTO "songs" (rank, artist, track, published)
    VALUES ($1, $2, $3, $4)`;
    // let sql sanitize your inputs 
    pool.query(sqlText, [newSong.rank, newSong.artist, newSong.track, newSong.published])
    .then((result) => {
        console.log(`Added snog to the database`, newSong);
        res.sendStatus(201)
        
    }).catch( (error) =>{
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500); // Good server always respondeds
            
    })
})

// Setup DELETE to remove a song from the database
// We are using a request parameter (req.params) to identify
// the song we want to delete. We expect this will be an id
// from the database. 
app.delete('/songs/:id', (req, res) => {
    let reqId = req.params.id
    console.log('delete request', reqId);
    let sqlText = 'DELETE FROM songs WHERE id=$1;';
    pool.query(sqlText, [reqID])
      .then( (result) =>{
        console.log('Song deleted');
        res.sendStatus(200);
      }).catch( (error) =>{
        console.log(`Error making database delete ${sqlText}`, error);
        res.sendStatus(500); // Good server always respondeds
            
    })
})

//change rank on song 
app.put('/songs/rank/:id', (req, res) => {
    let songId = req.params.id;
    //Direction will come from the client and say up or down
    let direction = req.body.direction;
    let sqlText = '';

    if (direction === 'up'){
        sqlText = `UPDATE songs SET rank=rank-1 WHERE id=$1`;
    } else if ( direction === 'down'){
        sqlText = `UPDATE songs SET rank=rank+1 WHERE id=$1`;
    } else {
        res.sendStatus(500);
        return;
    }

    pool.query(sqlText, [songId])
    .then( (result) => {
        res.sendStatus(200);
    })
    .catch((error) =>{
        console.log(`Error making database delete ${sqlText}`, error);
        res.sendStatus(500);
    })
})



const port = process.env.PORT || 5000;
app.listen( port, () => {
    console.log('up and running on port', port);
    
} )