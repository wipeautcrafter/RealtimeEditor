var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
res.sendFile(__dirname + '/src/index.html');
});

http.listen(80, function(){
  console.log('listening on *:80');
});

io.on('connection', function(socket) {
  socket.on('edit', function(value) {
    console.log('message got edited!');
    io.emit('edit', value);
  });
});
