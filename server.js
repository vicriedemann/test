var express = require('express');
var serialport = require("serialport");
var SerialPort = serialport.SerialPort
var serialPort = new SerialPort("/dev/cu.usbmodem621", {
    parser: serialport.parsers.readline("\n"),
    baudrate: 9600
});

serialPort.open(function () {
       var app = express()
    , server = require('http').createServer(app)
    , io = require('socket.io').listen(server);

    server.listen(8000);

    app.use(express.static('public'));
    app.get('/', function (req, res) {
        res.sendFile(__dirname + '/public/index.html');
    });

    io.sockets.on('connection', function (socket) {
       console.log("user connected " + socket.id)

                socket.on('message', function (msg) {
                    console.log(msg);
                }); 

                socket.on('disconnect', function () {
                    console.log('disconnected');
                });
    });
        serialPort.on('data', function(data) {

             
            io.sockets.emit('dist', { data: data});
            console.log(data);




        });

            
});

