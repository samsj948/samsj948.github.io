function myFunction() {
document.getElementById("one").style.color = "pink" ;

}

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