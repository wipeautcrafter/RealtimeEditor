var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
res.sendFile(__dirname + '/src/index.html');
});

http.listen(port, "0.0.0.0", function(){
  console.log('listening on *:'+port);
});

io.on('connection', function(socket) {
  socket.on('edit', function(value) {
    console.log('message got edited!');
    io.emit('edit', value);
  });
});
