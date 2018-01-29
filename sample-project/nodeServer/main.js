var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

const HOSTNAME = '127.0.0.1'; // Development config
// const HOSTNAME = '125.212.210.113'; // Production config
const PORT = 3000;

server.listen(PORT, HOSTNAME, function () {
    console.log("Server running at http://" + HOSTNAME + ":" + PORT);
});

io.on('connection', function(socket) {
    socket.on('it-software', function(data){
        console.log(data);
        io.emit('it-software', data);
    });
  socket.on('accounting', function(data){
    console.log(data);
    io.emit('accounting', data);
  });
  socket.on('banking', function(data){
    console.log(data);
    io.emit('banking', data);
  });
});
