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



$(document).on('keypress', function(e) {
  var key = e.key;

  console.log('keypress:', key);

  if ( key == '1' ) {
    document.body.style.background = "blue"
  } else if ( key == '2' ) {
   document.body.style.background = "orange"
  } else if ( key == '3' ) {
   document.body.style.background = "yellow"
  }  else if ( key == '4' ) {
    document.body.style.background = "red"
  }
  else if ( key == '5' ) {
    document.body.style.background = "green"
  }
  else if ( key == '6' ) {
    document.body.style.background = "pink"
  }
  else if ( key == '7' ) {
    document.body.style.background = "teal"
  }
  else if ( key == '8' ) {
    document.body.style.background = "grey"
  }
  else if ( key == '9' ) {
    document.body.style.background = "tan"
  }
  else if ( key == '0' ) {
    document.body.style.background = "white"
  }
 
});

$("#button").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#lower").offset().top
    }, 2000);
});

//var xPos = randPosX();
//var yPos = randPosY();

//$("#fruit").click(function randomImg1() {
//var myImage1 = new Array();
//  myImage1[0] = "watermelon.png";
//  myImage1[1] = "apple.png";
//  myImage1[2] = "banana.png";
//  myImage1[3] = "cherry.png";
//  myImage1[4] = "grapes.png";
//  myImage1[5] = "orange.png";
//  myImage1[6] = "strawberry.png";

//  var classes = ['class1', 'class2', 'class3'];

//  var random = Math.floor(Math.random() * myImage1.length);
//  document.getElementById("fruit").attributes;
//  document.getElementById("fruit").innerHTML =
//    "<img src='" + myImage1[random] + "' class='" + classes[random] + "' alt='image'></img>" ;
//}


//var myPix = new Array(
//"watermelon.png",
//"apple.png",
//"banana.png",
//"cherry.png",
//"grapes.png",
//"orange.png",
//"strawberry.png"
//);

//$("#fruit").on('click, function(myPix){
//     var randomNum = Math.floor(Math.random() * myPix.length);
     
//     document.getElementById("show").src = myPix[randomNum];

//});
$(document).on('click', function() {
  alert("How's it going?");

});


});