$(function(){
	console.log("digital quilt")

	var url = 'http://api.giphy.com/v1/gifs/search?q=mountains&api_key=aAKKbSeY3anXx460GUleGhjnpfjhOHNA'

	$.get(url, function(data) {
		console.log(data);


	});

})