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

$(function(){
	console.log("digital quilt")

	var getImage = function(term) {
		var url = 'http://api.giphy.com/v1/gifs/search?q=' + term + '&api_key=aAKKbSeY3anXx460GUleGhjnpfjhOHNA&limit=10'

		$.get(url, function(data) {
			console.log(data);

			var img = document.createElement("img");
			img.src = data.data[1].images.original.url;

			$('.term1-' + term).html(img);
		});
	};

	$('.button').click(function() {
		var term = $(this).data('term');
		console.log(term);
		getImage(term);
	});

})

$(function(){
	console.log("digital quilt")

	var getImage = function(term) {
		var url = 'http://api.giphy.com/v1/gifs/search?q=' + term + '&api_key=aAKKbSeY3anXx460GUleGhjnpfjhOHNA&limit=10'

		$.get(url, function(data) {
			console.log(data);

			var img = document.createElement("img");
			img.src = data.data[2].images.original.url;

			$('.term2-' + term).html(img);
		});
	};

	$('.button').click(function() {
		var term = $(this).data('term');
		console.log(term);
		getImage(term);
	});

})

$(function(){
	console.log("digital quilt")

	var getImage = function(term) {
		var url = 'http://api.giphy.com/v1/gifs/search?q=' + term + '&api_key=aAKKbSeY3anXx460GUleGhjnpfjhOHNA&limit=10'

		$.get(url, function(data) {
			console.log(data);

			var img = document.createElement("img");
			img.src = data.data[3].images.original.url;

			$('.term3-' + term).html(img);
		});
	};

	$('.button').click(function() {
		var term = $(this).data('term');
		console.log(term);
		getImage(term);
	});

})

$(function(){
	console.log("digital quilt")

	var getImage = function(term) {
		var url = 'http://api.giphy.com/v1/gifs/search?q=' + term + '&api_key=aAKKbSeY3anXx460GUleGhjnpfjhOHNA&limit=10'

		$.get(url, function(data) {
			console.log(data);

			var img = document.createElement("img");
			img.src = data.data[4].images.original.url;

			$('.term4-' + term).html(img);
		});
	};

	$('.button').click(function() {
		var term = $(this).data('term');
		console.log(term);
		getImage(term);
	});

})

$(function(){
	console.log("digital quilt")

	var getImage = function(term) {
		var url = 'http://api.giphy.com/v1/gifs/search?q=' + term + '&api_key=aAKKbSeY3anXx460GUleGhjnpfjhOHNA&limit=10'

		$.get(url, function(data) {
			console.log(data);

			var img = document.createElement("img");
			img.src = data.data[5].images.original.url;

			$('.term5-' + term).html(img);
		});
	};

	$('.button').click(function() {
		var term = $(this).data('term');
		console.log(term);
		getImage(term);
	});

})

$(function(){
	console.log("digital quilt")

	var getImage = function(term) {
		var url = 'http://api.giphy.com/v1/gifs/search?q=' + term + '&api_key=aAKKbSeY3anXx460GUleGhjnpfjhOHNA&limit=10'

		$.get(url, function(data) {
			console.log(data);

			var img = document.createElement("img");
			img.src = data.data[6].images.original.url;

			$('.term6-' + term).html(img);
		});
	};

	$('.button').click(function() {
		var term = $(this).data('term');
		console.log(term);
		getImage(term);
	});

})

$(function(){
	console.log("digital quilt")

	var getImage = function(term) {
		var url = 'http://api.giphy.com/v1/gifs/search?q=' + term + '&api_key=aAKKbSeY3anXx460GUleGhjnpfjhOHNA&limit=10'

		$.get(url, function(data) {
			console.log(data);

			var img = document.createElement("img");
			img.src = data.data[7].images.original.url;

			$('.term7-' + term).html(img);
		});
	};

	$('.button').click(function() {
		var term = $(this).data('term');
		console.log(term);
		getImage(term);
	});

})

$(function(){
	console.log("digital quilt")

	var getImage = function(term) {
		var url = 'http://api.giphy.com/v1/gifs/search?q=' + term + '&api_key=aAKKbSeY3anXx460GUleGhjnpfjhOHNA&limit=10'

		$.get(url, function(data) {
			console.log(data);

			var img = document.createElement("img");
			img.src = data.data[8].images.original.url;

			$('.term8-' + term).html(img);
		});
	};

	$('.button').click(function() {
		var term = $(this).data('term');
		console.log(term);
		getImage(term);
	});

})

$(function(){
	console.log("digital quilt")

	var getImage = function(term) {
		var url = 'http://api.giphy.com/v1/gifs/search?q=' + term + '&api_key=aAKKbSeY3anXx460GUleGhjnpfjhOHNA&limit=10'

		$.get(url, function(data) {
			console.log(data);

			var img = document.createElement("img");
			img.src = data.data[9].images.original.url;

			$('.term9-' + term).html(img);
		});
	};

	$('.button').click(function() {
		var term = $(this).data('term');
		console.log(term);
		getImage(term);
	});

})



// for (i = 0; i < data.data.length; i++) {
// 				var img = document.createElement("img");
// 				img.src = data.data[i].images.original.url;	
// 			}