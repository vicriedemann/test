var _storedData="";
var _current =""; 
var counter_in=0;
var counter_out=0;
window.onload = function () {
	 
	var socket = io.connect('http://10.230.20.156:8000/'); 

	socket.on('connect', function () {
		//console.log('connected');
		socket.on('dist', function (data) {

			var dat = Number(data.data);

			 console.log (dat)

		      if (dat > 100) {

		       
		      	counter_out++;
		      	counter_in=0;


		      	 

		  } else {

		      	

		      	counter_in++;
		      	counter_out=0;
		       
		      }


		  distance();   

		 
			
		});
	});
		var socket2 = io.connect('http://10.230.20.155:8000/');
	
	socket2.on('connect', function () { 
		//console.log('connected');
		socket2.on('data', function (data) {
 

			
		      _storedData = data.data;
		      _storedData =  _storedData.charAt(0);
		      
		      

		      if (_current != _storedData) { eval(_storedData); } else { /*    */ }
		      

		      _storedData=""; 

			
		});

	});
};
function distance(){
		if (counter_in==1) {
				$( ".value" ).fadeTo( 500 , 0 );

		}
		if (counter_out==1){
				$( ".value" ).fadeTo( 500 , 1 );
		}
}
function eval(val) {
/**/
console.log(val)
$(".value").html(val)


}
