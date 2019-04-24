$(function() {
	// $.get('https://samsj948.github.io/api.json', function(data) {
	// 	console.log(data);



	// 	$('.word-adjective-1').html(data.adjective1);
	// 	$('.word-adjective-2').html(data.adjective2);
	// 	$('.word-artSupply').html(data.artSupply);
	// 	$('.word-artistName').html(data.artistName);
	// 	$('.word-bodyPart').html(data.bodyPart);
	// 	$('.word-celebrityName').html(data.celebrityName);
	// 	$('.word-computerSoftware').html(data.computerSoftware);
	// 	$('.word-foods').html(data.foods.join(', '));
	// 	$('.word-noun1').html(data.noun1);
	// 	$('.word-noun2').html(data.noun2);
	// 	$('.word-numbers').html(data.numbers.join(', '));
	// 	$('.word-placeInNewYork').html(data.placeInNewYork);
	// 	$('.word-pluralNoun1').html(data.pluralNoun1);
	// 	$('.word-pluralNoun2').html(data.pluralNoun2);
	// 	$('.word-pluralNoun3').html(data.pluralNoun3);
	// 	$('.word-verbEndingInIng').html(data.verbEndingInIng);
	// 	$('.word-websiteName').html(data.websiteName);

		var people = [
		    "https://kquea402.github.io/api.json",
    		"https://glics998.github.io/api.json",
   			 "https://colindharrington.github.io/api.json",
    		"https://hoant626.github.io/api.json",
    		"https://karla772.github.io/api.json",
    		"https://leeh779.github.io/api.json",
    		"https://lis874.github.io/api.json",
    		"https://phoebechloee.github.io/api.json",
    		"https://luw779.github.io/api.json",
    		"https://mullg389.github.io/api.json",
    		"https://pana005.github.io/api.json",
   			 "https://raos130.github.io/api.json",
    		"https://samsj948.github.io/api.json",
    		"https://shaha129.github.io/api.json",
    		"https://Mwedd9.github.io/api.json",
    		"https://zhenx804.github.io/api.json"
		];

		$('.eggbutton').click(function(){
		var randomPerson = people[Math.floor(Math.random()*people.length)]
		console.log(randomPerson);

		$.get(randomPerson, function(data){

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

	});


	}).fail(function() {
		console.log('Error in GET request. Uh oh')

	});

});



// $(function() {
// 	$.get('https://samsj948.github.io/api.json', function(data) {
// 		console.log(data);



// 		$('.word-adjective-1').html(data.adjective1);
// 		$('.word-adjective-2').html(data.adjective2);
// 		$('.word-artSupply').html(data.artSupply);
// 		$('.word-artistName').html(data.artistName);
// 		$('.word-bodyPart').html(data.bodyPart);
// 		$('.word-celebrityName').html(data.celebrityName);
// 		$('.word-computerSoftware').html(data.computerSoftware);
// 		$('.word-foods').html(data.foods.join(', '));
// 		$('.word-noun1').html(data.noun1);
// 		$('.word-noun2').html(data.noun2);
// 		$('.word-numbers').html(data.numbers.join(', '));
// 		$('.word-placeInNewYork').html(data.placeInNewYork);
// 		$('.word-pluralNoun1').html(data.pluralNoun1);
// 		$('.word-pluralNoun2').html(data.pluralNoun2);
// 		$('.word-pluralNoun3').html(data.pluralNoun3);
// 		$('.word-verbEndingInIng').html(data.verbEndingInIng);
// 		$('.word-websiteName').html(data.websiteName);

		


// 	}).fail(function() {
// 		console.log('Error in GET request. Uh oh')

// 	});

// });
