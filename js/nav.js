$("#hamburger").click(function() {
	$("nav").fadeIn(400);
	$(this).fadeOut(100);
	adjustScaffold();
});

$("#hide_nav").click(function() {
	$("nav").fadeOut(400);
	$("#hamburger").fadeIn(400);
	adjustScaffold();
});

function adjustScaffold() {
	var scaffold = $("#scaffold");
	var nav = $("nav");
	
	if ($(window).width() > 800) {
		scaffold.css({"left": nav.css("width"), "top": "0"});
		scaffold.css({"width": $(window).width() - nav.width() + "px"});
		nav.fadeIn(400);
	} else {
		scaffold.css({"left": "0", "top": "0", "width": "100%"});
	}
}

$(window).resize(function() {
	adjustScaffold();
});

$(document).ready(function() {
	adjustScaffold();
});