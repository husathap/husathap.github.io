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

/*$("#toggle_all").click(function() {
	if ($(this).hasClass("selected")) {
		$(this).removeClass("selected");
		$(".education").hide();
	} else {
		$(this).addClass("selected");
		$(".education").show();
	}
});

$("#toggle_education").click(function() {
	if ($(this).hasClass("selected")) {
		$(this).removeClass("selected");
		$(".education").hide();
	} else {
		$(this).addClass("selected");
		$(".education").show();
	}
});

$("#toggle_teaching").click(function() {
	if ($(this).hasClass("selected")) {
		$(this).removeClass("selected");
		$(".teaching").hide();
	} else {
		$(this).addClass("selected");
		$(".teaching").show();
	}
});

$("#toggle_work").click(function() {
	if ($(this).hasClass("selected")) {
		$(this).removeClass("selected");
		$(".private").hide();
	} else {
		$(this).addClass("selected");
		$(".private").show();
	}
});

$("#toggle_volunteer").click(function() {
	if ($(this).hasClass("selected")) {
		$(this).removeClass("selected");
		$(".volunteer").hide();
	} else {
		$(this).addClass("selected");
		$(".volunteer").show();
	}
});*/