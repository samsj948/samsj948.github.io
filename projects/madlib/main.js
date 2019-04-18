$(function() {
	$.get('https://samsj948.github.io/api.json', function(data) {
		console.log(data);
		var adjective1 = data.adjective1;



		$('word-adjective-1').html(data.adjective1);
		$('word-adjective-2').html(data.adjective2);


	}).fail(function() {
		console.log('Error in GET. request.')

	});

});