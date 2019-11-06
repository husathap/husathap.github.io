$("#navbtn").click(function() {
	$("#navlinks").toggle(1000);
	
	if ($("#navbtn").text() == "+") {
		$("#navbtn").text("-");
	} else {
		$("#navbtn").text("+");
	}
});