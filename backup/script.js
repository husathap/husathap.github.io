
// Obtained from: https://journalofasoftwaredev.wordpress.com/2011/10/30/replicating-string-format-in-javascript/
String.prototype.format = function()
{
   var content = this;
   for (var i=0; i < arguments.length; i++)
   {
        var replacement = '{' + i + '}';
        content = content.replace(replacement, arguments[i]);  
   }
   return content;
};

// Used code from: http://www.robertprice.co.uk/robblog/using-jquery-to-scroll-to-an-element/
$("#home-link").click(function() { 
	$('html, body').animate({scrollTop: ($('#home-section').offset().top - $("#nav").height())}, 500);
});
$("#exp-link").click(function() { 
	$('html, body').animate({scrollTop: ($('#exp-section').offset().top - $("#nav").height())}, 500);
}); 
$("#pro-link").click(function() { 
	$('html, body').animate({scrollTop: ($('#pro-section').offset().top - $("#nav").height())}, 500);
});
$("#sco-link").click(function() { 
	$('html, body').animate({scrollTop: ($('#sco-section').offset().top - $("#nav").height())}, 500);
});


for (const e in educationModel) {
	let obj = educationModel[e];
	$("#exp-content").append(`
		<div class="card card-exp">
			<div class="card-block">
				<h2 class="card-title">{0}, {1}</h2>
				<div class="card-text">
					<div><strong>Program:</strong> {2}</div>
					<div><strong>Duration:</strong> {3} until {4}</div>
				</div>
			</div>
			</div>`.format(obj.degree, obj.university, obj.program, obj.start, obj.end))
}

for (const e in projectModel) {
	let obj = projectModel[e];
	let head = '<h2 class="card-title">{0}</h2>'.format(obj.name);
	
	if (obj.link) {
		head = '<h2 class="card-title"><a href="{0}" target="_blank">{1}</a></h2>'.format(obj.link, obj.name);
	}
	
	$("#pro-content").append(`
		<div class="card card-pro col-lg-3 mt-1 mr-1">
			<div class="card-block">
				<h2 class="card-title">{0}</h2>
				<div class="card-text">
					<div><strong>Description:</strong> {1}</div>
				</div>
			</div>
			</div>`.format(head, obj.description))
}

for (const e in scholarshipModel) {
	let obj = scholarshipModel[e];
	let head = '<h2 class="card-title">{0}</h2>'.format(obj.name);
	
	$("#sco-content").append(`
		<div class="card card-pro col-lg-12 mt-1">
			<div class="card-block">
				<h2 class="card-title">{0}</h2>
				<div class="card-text">
					<div><strong>Granted By:</strong> {1}</div>
					<div><strong>Year:</strong> {2}</div>
				</div>
			</div>
			</div>`.format(head, obj.grantor, obj.year))
}



$("#education").click(function() {
	$(".exp").removeClass("active");
	$(this).addClass("active");
	$("#exp-content").fadeOut(200, 
		function() {
			$("#exp-content").html("");
			for (const e in educationModel) {
				let obj = educationModel[e];
				$("#exp-content").append(`
		<div class="card card-exp">
			<div class="card-block">
				<h2 class="card-title">{0}, {1}</h2>
				<div class="card-text">
					<div><strong>Program:</strong> {2}</div>
					<div><strong>Duration:</strong> {3} until {4}</div>
				</div>
			</div>
		</div>`.format(obj.degree, obj.university, obj.program, obj.start, obj.end));
			}
		}).fadeIn(200);
});

$("#teaching").click(function() {
	$(".exp").removeClass("active");
	$(this).addClass("active");
	$("#exp-content").fadeOut(200, 
		function() {
			$("#exp-content").html("");
			for (const e in teachingModel) {
				let obj = teachingModel[e];
				$("#exp-content").append(`
		<div class="card card-exp">
			<div class="card-block">
				<h2 class="card-title">{0} for {1}</h2>
				<div class="card-text">
					<div><strong>Course Name:</strong> {2}</div>
					<div><strong>University:</strong> {3}</div>
					<div><strong>Term:</strong> {4}</div>
				</div>
			</div>
		</div>`.format(obj.role, obj.classCode, obj.className, obj.university, obj.term));
			}
		}).fadeIn(200);
});

$("#private").click(function() {
	$(".exp").removeClass("active");
	$(this).addClass("active");
	$("#exp-content").fadeOut(200, 
		function() {
			$("#exp-content").html("");
			for (const e in privateModel) {
				let obj = privateModel[e];
				$("#exp-content").append(`
		<div class="card card-exp">
			<div class="card-block">
				<h2 class="card-title">{0} at {1}</h2>
				<div class="card-text">
					<div><strong>Location:</strong> {2}</div>
					<div><strong>Duration:</strong> {3} until {4}</div>
				</div>
			</div>
		</div>`.format(obj.role, obj.company, obj.location, obj.start, obj.end));
			}
		}).fadeIn(200);
});

$("#volunteer").click(function() {
	$(".exp").removeClass("active");
	$(this).addClass("active");
	$("#exp-content").fadeOut(200, 
		function() {
			$("#exp-content").html("");
			for (const e in volunteerModel) {
				let obj = volunteerModel[e];
				$("#exp-content").append(`
		<div class="card card-exp">
			<div class="card-block">
				<h2 class="card-title">{0} for {1}</h2>
				<div class="card-text">
					<div><strong>Organization's Affiliation:</strong> {2}</div>
					<div><strong>Duration:</strong> {3} until {4}</div>
				</div>
			</div>
		</div>`.format(obj.role, obj.organization, obj.affiliation, obj.start, obj.end));
			}
		}).fadeIn(200);
});