$(function() {
	$.get('https://samsj948.github.io/api.json', function(data) {
		console.log(data);
		var adjective1 = data.adjective1;



		$('.word-adjective-1').html(data.adjective1);
		$('.word-adjective-2').html(data.adjective2);
		$('.word-artSupply').html(data.artSupply);
		$('.word-artistName').html(data.artistName);
		$('.word-bodyPart').html(data.bodyPart);
		$('.word-celebrityName').html(data.celebrityName);
		$('.word-computerSoftware').html(data.computerSoftware);
		$('.word-foods').html(data.foods.join(', '));
		$('.word-noun1').html(data.noun1);
		$('.word-noun2').html(data.noun2);
		$('.word-numbers').html(data.numbers.join(', '));
		$('.word-placeInNewYork').html(data.placeInNewYork);
		$('.word-pluralNoun1').html(data.pluralNoun1);
		$('.word-pluralNoun2').html(data.pluralNoun2);
		$('.word-pluralNoun3').html(data.pluralNoun3);
		$('.word-verbEndingInIng').html(data.verbEndingInIng);
		$('.word-websiteName').html(data.websiteName);



	}).fail(function() {
		console.log('Error in GET. request.')

	});

});