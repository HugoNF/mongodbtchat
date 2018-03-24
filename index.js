var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log('utilisateur connecté');
    socket.on('disconnect', function(){
        console.log('utilisateur déconnecté');
    });
});

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });
});


http.listen(3000, function(){
    console.log('ça roule sur localhost:3000');
});