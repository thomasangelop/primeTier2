const express = require('express');

const app = express();

app.use( express.static( 'server/public') );

const port = 5000;
app.listen( port, function() {
    console.log(`Express is listening on port ${port}...`);
});