

$(function(){
	console.log("digital quilt")

	var getImage = function(term) {
		var url = 'https://api.giphy.com/v1/gifs/search?q=' + term + '&api_key=aAKKbSeY3anXx460GUleGhjnpfjhOHNA&limit=10'

		$.get(url, function(data) {
			console.log(data);

			data.data.forEach(function(item, index) {
				console.log(index);
				console.log(item);

				var img = document.createElement("img");
				img.src = item.images.original.url;

				$('.bar' + (index + 1)).html(img);
console.log(term)

			});
		});
	};

	$('.button').click(function() {
		var term = $(this).data('term');
		console.log(term);
		console.log('term')
		getImage(term);
	});

	$('.button').first().trigger('click');


})

	