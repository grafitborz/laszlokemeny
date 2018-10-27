$(document).ready(function () {
    new WOW().init();
    plyr.setup();
});


/*scroll smmothly*/
	$(document).ready(function(){
	  // Add smooth scrolling to all links
	  $(".smooth-scroll").on('click', function(event) {

	    // Make sure this.hash has a value before overriding default behavior
	    if (this.hash !== "") {
	      // Prevent default anchor click behavior
	      event.preventDefault();

	      // Store hash
	      var hash = this.hash;

	      // Using jQuery's animate() method to add smooth page scroll
	      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	      $('html, body').animate({
	        scrollTop: $(hash).offset().top
	      }, 800, function(){

	        // Add hash (#) to URL when done scrolling (default click behavior)
	        window.location.hash = hash;
	      });
	    } // End if
	  });
	});

/******************scrolto******************************/
(function() {
var delay = false;

jQuery(document).on('mousewheel DOMMouseScroll', function(event) {
event.preventDefault();
if(delay) return;

delay = true;
setTimeout(function(){delay = false},200)

var wd = event.originalEvent.wheelDelta || -event.originalEvent.detail;

var a = document.getElementsByClassName('anchor');
if(wd < 0) {
  for(var i = 0 ; i < a.length ; i++) {
    var t = a[i].getClientRects()[0].top;
    if(t >= 40) break;
  }
}
else {
  for(var i = a.length-1 ; i >= 0 ; i--) {
    var t = a[i].getClientRects()[0].top;
    if(t < -20) break;
  }
}

if(i >= 0 && i < a.length) {
  jQuery('html,body').animate({
    scrollTop: a[i].offsetTop
  });
}
});
})();
console.clear();
