$(function(){
	console.log("digital quilt")

	var getImage = function(term) {
		var url = 'http://api.giphy.com/v1/gifs/search?q=' + term + '&api_key=aAKKbSeY3anXx460GUleGhjnpfjhOHNA&limit=10'

		$.get(url, function(data) {
			console.log(data);

			var img = document.createElement("img");
			img.src = data.data[0].images.original.url;

			$('.term-' + term).html(img);
		});
	};

	$('.button').click(function() {
		var term = $(this).data('term');
		console.log(term);
		getImage(term);
	});

})

// $('.bar1').html(data.data[0].images.looping.mp4);
// $('.bar1').html(data.data.images.url);