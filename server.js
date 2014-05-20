var express = require('express');
var compress = require('compression');
var app = express();
var port = 3000;

app.use(compress({ threshold: 512}));
app.use(express.static(__dirname + '/client'));
app.listen(process.env.PORT || port);
console.log('Server now listening on port ' + port);

