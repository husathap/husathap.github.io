var work_data = [
	{date:"20/May-Now", company:"Centre for Teaching and Learning, Dalhousie University", position:"Remote Support/Course Builder", volunteer:false, location:"Halifax, Canada"},
	{date:"20/Jan", company:"Faculty of Computer Science, Dalhousie University", position:"Local Guide", volunteer:true, location:"Halifax, Canada"},
	{date:"19/Dec-19/Jan", company:"Windsor/West Hants Together, The Government of Nova Scotia", position:"Part-Time Statistician", volunteer:false, location:"West Hants, Canada"},
	{date:"19/May-19/Aug", company:"Centre for Teaching and Learning, Dalhousie University", position:"Graudate Research Association", volunteer:false, location:"Halifax, Canada"},
	{date:"19/Apr", company:"SURGE Sandbox, Dalhousie University", position:"Mentor", volunteer:true, location:"Halifax, Canada"},
	{date:"19/Jan", company:"CHI Conference on Human Factors in Computing Systems", position:"Reviewer", volunteer:true, location:"Glasgow, United Kingdom"},
	{date:"18/May-18/Aug", company:"Centre for Teaching and Learning, Dalhousie University", position:"Graudate Research Association", volunteer:false, location:"Halifax, Canada"},
	{date:"18/Apr", company:"CHI Conference on Human Factors in Computing Systems", position:"Student Volunteer", volunteer:true, location:"Montreal, Canada"},
	{date:"18/Jan", company:"Dalhousie Computer Science In-House (DCSI) Conference", position:"Session Chair and Judge", volunteer:true, location:"Halifax, Canada"},
	{date:"16/Sep-16/Dec", company:"Lenovo", position:"Research Intern", volunteer:false, location:"Beijing, China"},
	{date:"15/Sep-15/Dec", company:"Crowsnest Residence, University of Calgary", position:"Fire Warden", volunteer:true, location:"Calgary, Canada"},
	{date:"15/May-15/Aug", company:"TAGLab, University of Toronto", position:"Research Trainee", volunteer:false, location:"Toronto, Canada"},
	{date:"14/Jun-14/Aug", company:"JetAsia Airways", position:"Information Technology Intern", volunteer:false, location:"Bangkok, Thailand"},
	{date:"12/Sep-15/Dec", company:"Crowsnest Residence, University of Calgary", position:"Fire Warden", volunteer:true, location:"Calgary, Canada"},
	{date:"12/Sep-13/Sep", company:"Innis Residence, University of Toronto", position:"InSight Mentor", volunteer:true, location:"Toronto, Canada"},
	{date:"12/Feb", company:"University of Toronto", position:"Alternative Reading Week Job Shadower", volunteer:true, location:"Toronto, Canada"},
	{date:"11/Sep-14/Apr", company:"Japan-Canada Student Association at University of Toronto", position:"Language Exchange Participant", volunteer:true, location:"Toronto, Canada"},
];

function work_data_html(row_data) {
	return "<tr>" +
		"<td>" + row_data.date + "</td>" +
		"<td>" + row_data.company + "</td>" +
		"<td>" + row_data.position + "</td>" +
		"<td>" + (row_data.volunteer ? "Yes":"No") + "</td>" +
		"<td>" + row_data.location + "</td>" +
		"</tr>"
}