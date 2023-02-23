const express = require('express');
const app = express();
const port = 3000;

app.get('/', function(req, res){
    res.send('Zdravo svima!')
});

app.listen(port, function(){
    console.log(`Aplikacija je živa na portu ${port}!`);
});