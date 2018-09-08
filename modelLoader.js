
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

// Fill the hidden field in the index with the data from the model.

for (const e in educationModel) {
	let obj = educationModel[e];
	$("#education-data").append(`
	<h2>{0}, {1}</h2>
	<img src="uni_logos/{5}" style="float:right; width:3rem; height:3rem" aria-hidden="true"></img>
	<div>
		<div><strong>Program:</strong> {2}</div>
		<div><strong>Duration:</strong> {3} until {4}</div>
	</div><hr/>`.format(obj.degree, obj.university, obj.program, obj.start, obj.end, obj.logo))
}

for (const e in teachingModel) {
	let obj = teachingModel[e];
	let season = "";
	
	switch (obj.term.split(" ")[0]) {
		case "Fall":
			season = '<i class="fas fa-leaf" style="color:orange" aria-hidden="true"></i>';
			break;
		case "Winter":
			season = '<i class="fas fa-snowflake" style="color:blue" aria-hidden="true"></i>';
			break;
		case "Summer":
			season = '<i class="fas fa-sun" style="color:red" aria-hidden="true"></i>';
			break;
	}
	
	if (!obj.current)
		$("#teaching-data").append(`
			<h2>{0} for <span style='font-family:monospace;font-weight:bold'>{1}</span></h2>
			<img src="uni_logos/{5}" style="float:right; width:3rem; height:3rem" aria-hidden="true"></img>
			<div>
				<div><strong>Course Name:</strong> {2}</div>
				<div><strong>University:</strong> {3}</div>
				<div><strong>Term:</strong> {6} {4} </div>
			</div><hr/>`.format(obj.role, obj.classCode, obj.className, obj.university, obj.term, obj.logo, season));
	else
		$("#teaching-data").append(`
		<h2><i class="fas fa-hourglass-half"></i> {0} for <span style='font-family:monospace;font-weight:bold'>{1}</span></h2>
		<img src="uni_logos/{5}" style="float:right; width:3rem; height:3rem" aria-hidden="true"></img>
		<div>
			<div><strong>Course Name:</strong> {2}</div>
			<div><strong>University:</strong> {3}</div>
			<div><strong>Term:</strong> {6} {4} </div>
		</div><hr/>`.format(obj.role, obj.classCode, obj.className, obj.university, obj.term, obj.logo, season));
}

for (const e in publicationModel) {
	let obj = publicationModel[e];
	if (!obj.forthcoming) {
		$("#publication-data").append(`<p>{0}<p/><hr/>`.format(obj.reference));
	} else {
		$("#publication-data").append(`<p><i class="fas fa-hourglass-half"></i> {0}<p/><hr/>`.format(obj.reference));
	}
}

for (const e in privateModel) {
	let obj = privateModel[e];

	if (!obj.current)
		$("#job-data").append(`
			<h3>{0} at {1}</h3>
			<div>
				<div><strong>Location:</strong> {2}</div>
				<div><strong>Duration:</strong> {3} until {4}</div>
				</div>
			</div><hr/>`.format(obj.role, obj.company, obj.location, obj.start, obj.end));
	else
		$("#job-data").append(`
		<h3><i class="fas fa-hourglass-half"></i> {0} at {1}</h3>
		<div>
			<div><strong>Location:</strong> {2}</div>
			<div><strong>Duration:</strong> {3} until {4}</div>
			</div>
		</div><hr/>`.format(obj.role, obj.company, obj.location, obj.start, obj.end));
}

for (const e in volunteerModel) {
	let obj = volunteerModel[e];
	if (obj.end)
		$("#volunteer-data").append(`
			<h3>{0} for {1}</h3>
			<div>
				<div><strong>Organization's Affiliation:</strong> {2}</div>
				<div><strong>Duration:</strong> {3} until {4}</div>
			</div><hr/>`.format(obj.role, obj.organization, obj.affiliation, obj.start, obj.end));
	else
		$("#volunteer-data").append(`
			<h3>{0} for {1}</h3>
			<div>
				<div><strong>Organization's Affiliation:</strong> {2}</div>
				<div><strong>During:</strong> {3}</div>
			</div><hr/>`.format(obj.role, obj.organization, obj.affiliation, obj.start));
}

for (const e in projectModel) {
	let obj = projectModel[e];
	let head = '<h2>{0}</h2>'.format(obj.name);
	
	if (obj.link) {
		head = '<h2><a href="{0}" target="_blank">{1}</a></h2>'.format(obj.link, obj.name);
	}
	
	$("#projects-data").append(`
		<h2 class="card-title">{0}</h2>
		<div class="card-text">
			<div><strong>Description:</strong> {1}</div>
		</div><hr/>`.format(head, obj.description))
}