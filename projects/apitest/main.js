$(function(){
	console.log( "hello");
	
	var url = 'http://api.openweathermap.org/data/2.5/weather?q=New+York&appid=bfd82298d00c0642db2963d20318d1a3'
	
	$.get(url, function(data) {
		// The get request fires a callback function when the API request finishes
		// 	  weatherData = data;
	  console.log(data);
		// The data object contains all the information returned in the API
	  var weather = data.weather[0];
		// In this case, the most interesting bit of data is in the weather key
		// Now do something interesting with the data!
	  $('body').html('The weather is ' + weather.description);
	  
		var speed = data.wind.speed;
		console.log(speed);
	  
	  	if (speed >= 2){
			document.body.style.backgroundColor = "black";
			console.log(speed, "black")
			$('audio#wind1')[0].play()
		}
		else {
			document.body.style.backgroundColor = "grey";
			console.log(speed, "grey")
			$('audio#wind2')[0].play()
		}	
		var noise1 = document.getElementById("wind1");
		var noise2 = document.getElementById("wind2");
		
	//	if (speed = 1){
	//		noise1.play();
	//	}
	//	else {
	//		noise2.play();
	//	}
		
	
			
		

	});
	
})