/*$(document).ready(function () {
	if (sessionStorage.menuToggled) {
		$("#navlinks").show(0);
		$("#navbtn").text("-");
	} else {
		$("#navlinks").hide(0);
		$("#navbtn").text("+");
	}
});*/

function adjustNavBar() {
	if ($(document).width() < 801) {
		$("#navbtn").css({"display": "inline"});
		$("#navlinks").hide(0);
	} else {
		$("#navbtn").css({"display": "none"});
		$("#navlinks").show(0);
	}
}

$(window).resize(adjustNavBar);

$("#navbtn").click(function() {
	$("#navlinks").toggle(1000);
	
	if ($("#navbtn").text() == "+") {
		$("#navbtn").text("-");
	} else {
		$("#navbtn").text("+");
	}
});

$(document).ready(function() {
	adjustNavBar();
});