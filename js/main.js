function clickSet() {
	if (circularnav.classList.contains("closed")) {
		$("#main-nav > a").each(function(){
			var curve = Math.random() * 2 + 2;
			$(this).css("transition-timing-function", "cubic-bezier(0,0,0," + curve + ")");
			$(this).css("-webkit-transition-timing-function", "cubic-bezier(0,0,0," + curve + ")");
		});
	} else {
		$("#main-nav > a").css("transition-timing-function", "initial");
		$("#main-nav > a").css("-webkit-transition-timing-function", "initial");
	}

	circularnav.classList.toggle("closed")
	circularnav.classList.toggle("clicked");
	if (circularnav.classList.contains("closed")) {
		// freshly closed button
		var pseudoBefore = window.getComputedStyle(
			document.querySelector('.ss-icon'), ':before'
		).animation;
	}
}

var circularnav = document.getElementsByClassName("ss-icon")[0];

$(function() {
	circularnav.addEventListener("click", clickSet, false);

	$('.lazy-image').Lazy();
});
