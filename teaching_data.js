var teaching_data = [
	{term:"Fall", year:2020, university:"Dalhousie University", position:"Teaching Assistant", course_code:"SCIE 4701", course_name:"Sci. and Tech. Innovation, Commercialization, and Entrepreneurship I"},
	{term:"Spring+Summer", year:2020, university:"Dalhousie University", position:"Instructor/Course Developer", course_code:"CSCI 6055", course_name:"Research Methodology and Statistics"},
	{term:"Winter", year:2020, university:"Dalhousie University", position:"Teaching Assistant/Marker", course_code:"CSCI 6055/ECMM 6040", course_name:"Research Methodology and Statistics"},
	{term:"Winter", year:2020, university:"Dalhousie University", position:"Teaching Assistant/Marker", course_code:"CSCI 6610/CSCI 4163", course_name:"Human-Computer Interaction"},
	{term:"Fall", year:2019, university:"Dalhousie University", position:"Teaching Assistant/Marker", course_code:"CSCI 6307/CSCI 4169", course_name:"Usable Privacy and Security"},
	{term:"Fall", year:2019, university:"Dalhousie University", position:"Marker", course_code:"CSCI 6610/CSCI 4163", course_name:"Human-Computer Interaction"},
	{term:"Spring+Summer", year:2019, university:"Dalhousie University", position:"Teaching Assistant/Marker", course_code:"CSCI 6055", course_name:"Research Methodology and Statistics"},
	{term:"Winter", year:2019, university:"Dalhousie University", position:"Teaching Assistant/Marker", course_code:"CSCI 6610/CSCI 4163", course_name:"Human-Computer Interaction"},
	{term:"Fall", year:2018, university:"Dalhousie University", position:"Teaching Assistant/Marker", course_code:"CSCI 6610/CSCI 4163", course_name:"Human-Computer Interaction"},
	{term:"Winter", year:2018, university:"Dalhousie University", position:"Teaching Assistant/Marker", course_code:"CSCI 1101", course_name:"Computer Science II"},
	{term:"Fall", year:2017, university:"University of Calgary", position:"Teaching Assistant", course_code:"CSCP 203", course_name:"Introduction to Problem Solving Using Application Software"},
	{term:"Winter", year:2017, university:"University of Calgary", position:"Teaching Assistant", course_code:"SENG 513", course_name:"Web-Based System"},
	{term:"Winter", year:2016, university:"University of Calgary", position:"Teaching Assistant", course_code:"SENG 513", course_name:"Web-Based System"},
	{term:"Fall", year:2015, university:"University of Calgary", position:"Teaching Assistant", course_code:"CPSC 217", course_name:"Introduction to Computer Science for Multidisciplinary Studies I"},
	{term:"Fall", year:2013, university:"University of Toronto", position:"Teaching Assistant", course_code:"CSC 108", course_name:"Introduction to Programming"}
];

function teaching_data_html(row_data) {
	var season = "";

	switch(row_data.term) {
		case "Fall":
			season = "fall";
			break;
		case "Winter":
			season = "winter";
			break;
		case "Spring+Summer":
			season = "springsummer";
			break;
		default:
			season = "gapseason";
			break;
	}

	return "<tr class='" + season + "'>" +
		"<td>" + row_data.term + "</td>" +
		"<td>" + row_data.year + "</td>" +
		"<td>" + row_data.university + "</td>" +
		"<td>" + row_data.position + "</td>" +
		"<td>" + row_data.course_code + "</td>" +
		"<td>" + row_data.course_name + "</td>" +
		"</tr>"
}
