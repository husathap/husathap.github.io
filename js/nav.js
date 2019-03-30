$("#hamburger").click(function() {
	$("nav").css({"display": "inline"});
	$(this).css({"display": "none"});
	adjustScaffold();
});

$("#hide_nav").click(function() {
	$("#hamburger").css({"display": ""});
	$("nav").css({"display": ""});
	adjustScaffold();
});

function adjustScaffold() {
	var scaffold = $("#scaffold");
	var nav = $("nav");
	
	if (nav.css("display") == "none") {
		var hamburger = $("#hamburger");
		var hamburger_height = hamburger.css("height");
		scaffold.css({"left": "0", "top": "3.5rem"});
		scaffold.css({"width": "100%"});
	} else {
		scaffold.css({"left": nav.css("width"), "top": "0"});
		scaffold.css({"width": $(window).width() - nav.width() + "px"});
	}
}

$(window).resize(function() {
	adjustScaffold();
});

$(document).ready(function() {
	adjustScaffold();
});