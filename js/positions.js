$(".toggle").click(function() {
	$(".toggle").removeClass("selected");
	$(this).addClass("selected");
	
	var type = $(this).attr("id").split("_")[1];
	
	if (type == "all") {
		$(".education, .teaching, .volunteer, .private").show();
	} else {
		$(".education, .teaching, .volunteer, .private").hide();
		$("." + type).show();
	}
});