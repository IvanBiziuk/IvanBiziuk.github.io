( function( $ ) {

	console.log('jQuery');

	$(document).ready(function(){
 		$('.bxslider').bxSlider();
	});
	
	var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}


} )( jQuery );