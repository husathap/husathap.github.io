var teaching_data = [
	{term:"Winter", year:2021, university:"Dalhousie University", position:"Teaching Assistant", course_code:"SCIE 4702", course_name:"Science and Technology Innovation, Commercialization, and Entrepreneurship II"},
	{term:"Winter", year:2021, university:"Dalhousie University", position:"Teaching Assistant/Marker", course_code:"CSCI 3160", course_name:"User Interface Design"},
	{term:"Fall", year:2020, university:"Dalhousie University", position:"Teaching Assistant", course_code:"SCIE 4701", course_name:"Science and Technology Innovation, Commercialization, and Entrepreneurship I"},
	{term:"Spring", year:2020, university:"Dalhousie University", position:"Instructor/Course Developer", course_code:"CSCI 6055", course_name:"Research Methodology and Statistics"},
	{term:"Winter", year:2020, university:"Dalhousie University", position:"Teaching Assistant/Marker", course_code:"CSCI 6055/ECMM 6040", course_name:"Research Methodology and Statistics"},
	{term:"Winter", year:2020, university:"Dalhousie University", position:"Teaching Assistant/Marker", course_code:"CSCI 6610/CSCI 4163", course_name:"Human-Computer Interaction"},
	{term:"Fall", year:2019, university:"Dalhousie University", position:"Teaching Assistant/Marker", course_code:"CSCI 6307/CSCI 4169", course_name:"Usable Privacy and Security"},
	{term:"Fall", year:2019, university:"Dalhousie University", position:"Marker", course_code:"CSCI 6610/CSCI 4163", course_name:"Human-Computer Interaction"},
	{term:"Spring", year:2019, university:"Dalhousie University", position:"Teaching Assistant/Marker", course_code:"CSCI 6055", course_name:"Research Methodology and Statistics"},
	{term:"Winter", year:2019, university:"Dalhousie University", position:"Teaching Assistant/Marker", course_code:"CSCI 6610/CSCI 4163", course_name:"Human-Computer Interaction"},
	{term:"Fall", year:2018, university:"Dalhousie University", position:"Teaching Assistant/Marker", course_code:"CSCI 6610/CSCI 4163", course_name:"Human-Computer Interaction"},
	{term:"Winter", year:2018, university:"Dalhousie University", position:"Teaching Assistant/Marker", course_code:"CSCI 1101", course_name:"Computer Science II"},
	{term:"Fall", year:2017, university:"University of Calgary", position:"Teaching Assistant", course_code:"CSCP 203", course_name:"Introduction to Problem Solving Using Application Software"},
	{term:"Winter", year:2017, university:"University of Calgary", position:"Teaching Assistant", course_code:"SENG 513", course_name:"Web-Based System"},
	{term:"Winter", year:2016, university:"University of Calgary", position:"Teaching Assistant", course_code:"SENG 513", course_name:"Web-Based System"},
	{term:"Fall", year:2015, university:"University of Calgary", position:"Teaching Assistant", course_code:"CPSC 217", course_name:"Introduction to Computer Science for Multidisciplinary Studies I"},
	{term:"Fall", year:2013, university:"University of Toronto", position:"Teaching Assistant", course_code:"CSC 108", course_name:"Introduction to Programming"}
];


function teaching_data_card(row_data) {
	var instructor_style = "";

	if (row_data.position.includes("Instructor")) {
		instructor_style = "style='background-color:black; color:white'";
	}

	var season_icon = "";

	switch (row_data.term) {
		case "Fall":
			season_icon = `<i class="fa fa-leaf" aria-hidden="true"></i>`;
			break;
		case "Winter":
			season_icon = `<i class="fa fa-snowflake-o" aria-hidden="true"></i>`;
			break;
		case "Spring":
			season_icon = `<i class="fa fa-sun-o" aria-hidden="true"></i>`;
			break;
	}

	return `<div class='card' ${instructor_style}>
		<h1>${season_icon} ${row_data.term}, ${row_data.year}<br>${row_data.course_code}</h1>
		<h2>${row_data.position}</h2>
		<p><strong>Course Name:</strong> ${row_data.course_name}<br><strong>University:</strong> ${row_data.university}</p>
	</div>`
}
