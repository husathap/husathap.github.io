$("#section-content").hide();
$("#sub-heading").hide();
$("#sub-close").hide();
$("#sub-arrow").hide();
$("#section-content").css("marginBottom", $("footer").outerHeight());

function initializeSubHeader(text, content) {
	var section = $("#section-content");
	$("html, body").animate({scrollTop:0}, "fast", function() {
		$("#icons").fadeOut(300, function() { 
			
			$("#sub-arrow").fadeIn(300);
			$("#sub-close").fadeIn(300);
		
			var subHeading = $("#sub-heading");
			subHeading.html(text);
			subHeading.fadeIn(300);
			
			$("#section-content > section").html(content);
			section.fadeIn(300);
			$("#header").css("position", "fixed");
			$("#header").css("width", "100%");

			section.css("top", 0);
			section.offset({top:$("header").outerHeight(), left:0});
			
		});
	});
}

$("#sub-close").click(function() {
	$("#section-content").fadeOut(300, function() { $(this).hide() });
	$("#sub-arrow").fadeOut(300, function() { $(this).hide() });
	$("#sub-heading").fadeOut(300, function() { $(this).html("").hide()});
	$("#sub-close").fadeOut(300).hide(function() { $(this).hide() });
	$("#header").css("position", "sticky");
	$("#icons").fadeIn(300, function() {$(window).scrollTop(0);});
	
});

$("#card-bio").click(function() {
	initializeSubHeader("Bio", $("#bio-data").html());
});

$("#card-education").click(function() {
	initializeSubHeader("Education", $("#education-data").html());
});

$("#card-publication").click(function() {
	initializeSubHeader("Publication", $("#publication-data").html());
});

$("#card-teaching").click(function() {
	initializeSubHeader("Teaching", $("#teaching-data").html());
});

$("#card-experience").click(function() {
	initializeSubHeader("Experience", $("#experience-data").html());
});

$("#card-projects").click(function() {
	initializeSubHeader("Projects", $("#projects-data").html());
});

$("#card-contact").click(function() {
	initializeSubHeader("Contact Info", $("#contact-data").html());
});

$("#card-github").click(function() {
	window.location.href = "https://github.com/husathap";
});

$(window).resize(function() {
	var section = $("#section-content");
	section.offset({top:$("header").position().top + $("header").outerHeight(), left:0});
	section.css("marginBottom", $("footer").outerHeight());
});

$(window).scroll(function() {
	var section = $("#section-content");
	section.offset({top:$("header").position().top + $("header").outerHeight(), left:0});
	section.css("marginBottom", $("footer").outerHeight());
});