$(function() {
  // Your interactions go here
  $( "#target" ).click(function(){
    $("#other").toggle();
  });
  
 	$("#picture").click(function(){
  		$("#sea").animate({
  			left: "40%"  	
		 });
	 });
	 
//	var safeColors = ['00','33','66','99','cc','ff'];
//	var rand = function() {
//   		return Math.floor(Math.random()*6);
//	};
//	var randomColor = function() {
//  	  	var r = safeColors[rand()];
//   		var g = safeColors[rand()];
//   	 	var b = safeColors[rand()];
//   	 	return "#"+r+g+b;
//	};
	
//	$(document).ready(function() {
//    $('#random').click(function() {
//        $('.box').each(function() {
//            $(this).css('background',randomColor());
//       });
//    });
//});
var myArray = $(".box")

$("#random").click(function(){
	var randomValue = Math.floor(Math.random() * myArray.length);
	console.log(randomValue)
	$(".box").eq(randomValue).css("background-color", "red");
});

});