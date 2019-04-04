//SCROLLBAR//

var $tickerWrapper = $(".tickerwrapper");
var $list = $tickerWrapper.find("ul.list");
var $clonedList = $list.clone();
var listWidth = 16;

$list.find("li").each(function (i) {
			listWidth += $(this, i).outerWidth(true);
});

var endPos = $tickerWrapper.width() - listWidth;

$list.add($clonedList).css({
	"width" : listWidth + "px"
});

$clonedList.addClass("cloned").appendTo($tickerWrapper);

//TimelineMax
var infinite = new TimelineMax({repeat: -1, paused: true});
var time = 55;

infinite
  .fromTo($list, time, {rotation:0.01,x:0}, {force3D:true, x: -listWidth, ease: Linear.easeNone}, 0)
  .fromTo($clonedList, time, {rotation:0.01, x:listWidth}, {force3D:true, x:0, ease: Linear.easeNone}, 0)
  .set($list, {force3D:true, rotation:0.01, x: listWidth})
  .to($clonedList, time, {force3D:true, rotation:0.01, x: -listWidth, ease: Linear.easeNone}, time)
  .to($list, time, {force3D:true, rotation:0.01, x: 0, ease: Linear.easeNone}, time)
  .progress(1).progress(0)
  .play();

//Pause/Play		
$tickerWrapper.on("mouseenter", function(){
	infinite.pause();
}).on("mouseleave", function(){
	infinite.play();
});

//END SCROLLBAR//

//STICKY HEADER//

// window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("stickyheader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }

//END STICKY HEADER//

//DRAGGABLE BOXES//

$(function () {
	$(".box").draggable({            
    	stack: ".box"
    });
});
  
$(function () {
	$(".name").draggable({            
    	stack: ".name"
    });
});
//END DRAGGABLE BOXES//

//BEGIN NAVIGATION//
$(document).ready( function() {
	var hidenav = $('#hidenav');

	if ( hidenav.length ) {
		$(".navigation").hide(); //hide your div initially
    var topOfOthDiv = $("#hidenav").offset().top;
    $(window).scroll(function() {
        if($(window).scrollTop() > topOfOthDiv) { //scrolled past the other div?
            $(".navigation").show(); //reached the desired point -- show div
        }
        else{
            $(".navigation").hide(); //else above the desired point -- hide div
        }
    });
	}
	
//	var idleTimer;
	
//	$(document).mousemove(function() {
//		clearTimeout(idleTimer);
//		$('body').removeClass('screensaver');
		
//		idleTimer = setTimeout(function() {
//			console.log('screensaver time');
//			$('body').addClass('screensaver');
//		}, 3000);
//	});

});
