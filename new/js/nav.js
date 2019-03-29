$("#hamburger").click(function() {
	$("nav").css({"display": "inline"});
	$(this).css({"display": "none"});
	adjustScaffold();
});

$("#hide_a").click(function() {
	$("#hamburger").css({"display": ""});
	$("nav").css({"display": ""});
	adjustScaffold();
});

function adjustScaffold() {
	var scaffold = $("#scaffold");
	var nav = $("nav");
	var nav_width = nav.css("width");
	
	if (nav.css("display") == "none") {
		var hamburger = $("#hamburger");
		var hamburger_height = hamburger.css("height");
		scaffold.css({"left": "0", "top": "3.5rem"});
	} else {
		scaffold.css({"left": nav_width, "top": "0"});
	}
}

$(window).resize(function() {
	adjustScaffold();
});

$(document).ready(function() {
	adjustScaffold();
});