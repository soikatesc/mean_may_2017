var express = require('express')
var bp = require('body-parser')

var app = express()

app.use(express.static(__dirname + '/client'))
app.use(express.static(__dirname + '/bower_components'))
app.use(bp.json())

//connecting to mongoose
require('./server/config/mongoose')

//setup routes
require('./server/config/routes')(app)


app.listen(8000, function(){
	console.log('listening to port 8000....')
})

// var io = require('socket.io').listen(server);

// io.sockets.on('connection', function (socket) {
//   console.log(socket.id)
//   console.log("WE ARE USING SOCKETS!");

// })