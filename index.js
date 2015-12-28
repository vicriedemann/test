var serialport = require ("serialport");
var SerialPort = serialport.SerialPort;

var sp = new SerialPort("/dev/ttyACM0",{
 baudrate:9600,
 parser: serialport.parsers.readline("\n")

});



sp.open (function(){


sp.on("data", function(data){

var dist = parseInt (data,10);
console.log(dist)

});


});
