var express = require('express'),
    routes = require('./routes'),
    api = require('./routes/api');

var port = process.env.PORT || 4568;
var app = module.exports = express.createServer();

app.configure(function() {
    app.use(express.bodyParser());
    // app.use(express.methodOverride());
    app.use(express.static(__dirname + '/client'));
    app.use(app.router);
});

//RESTful Routes
// app.get('/api/posts', api.posts);
// app.delete('/api/post/:post_id', api.postDelete);

app.get('*', routes.index);

// var app = require('./server-config.js');


app.listen(port);

console.log('Server now listening on port ' + port);
