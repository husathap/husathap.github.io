var work_data = [
	{date:"Jun/2022-July/2022", company:"IEEE ISMAR", position:"Reviewer", volunteer:true, location:"Singapore"},
    {date:"Jan/2021-Jun/2022", company:"Ericsson/Dalhousie University", position:"MITACS Accelerate Intern", volunteer:false, location:"Montreal, Canada"},
	{date:"Jun/2021-Aug/2021", company:"Dalhousie Computer Science In-House Student Conference", position:"Organizer", volunteer:true, location:"Online"},
	{date:"Jun/2020-July/2020", company:"IEEE ISMAR", position:"Reviewer", volunteer:true, location:"Online"},
	{date:"May/2020-Dec/2020", company:"Centre for Teaching and Learning, Dalhousie University", position:"Remote Support/Course Builder", volunteer:false, location:"Halifax, Canada"},
	{date:"Jan/2020", company:"Faculty of Computer Science, Dalhousie University", position:"Local Guide", volunteer:true, location:"Halifax, Canada"},
	{date:"Dec/2019-Jan/2019", company:"Windsor/West Hants Together, The Government of Nova Scotia", position:"Part-Time Data Analyst", volunteer:false, location:"West Hants, Canada"},
	{date:"May/2019-Aug/2019", company:"Centre for Teaching and Learning, Dalhousie University", position:"Graudate Research Association", volunteer:false, location:"Halifax, Canada"},
	{date:"Apr/2019", company:"SURGE Sandbox, Dalhousie University", position:"Mentor", volunteer:true, location:"Halifax, Canada"},
	{date:"Jan/2019", company:"CHI Conference on Human Factors in Computing Systems", position:"Reviewer", volunteer:true, location:"Glasgow, United Kingdom"},
	{date:"May/2018-Aug/2018", company:"Centre for Teaching and Learning, Dalhousie University", position:"Graudate Research Association", volunteer:false, location:"Halifax, Canada"},
	{date:"Apr/2018", company:"CHI Conference on Human Factors in Computing Systems", position:"Student Volunteer", volunteer:true, location:"Montreal, Canada"},
	{date:"Jan/2018", company:"Dalhousie Computer Science In-House (DCSI) Conference", position:"Session Chair and Judge", volunteer:true, location:"Halifax, Canada"},
	{date:"Sep/2016-Dec/2016", company:"Lenovo", position:"Research Intern", volunteer:false, location:"Beijing, China"},
	{date:"Sep/2015-Dec/2015", company:"Crowsnest Residence, University of Calgary", position:"Fire Warden", volunteer:true, location:"Calgary, Canada"},
	{date:"May/2015-Aug/2015", company:"TAGLab, University of Toronto", position:"Research Trainee", volunteer:false, location:"Toronto, Canada"},
	{date:"Jun/2014-Aug/2014", company:"JetAsia Airways", position:"Information Technology Intern", volunteer:false, location:"Bangkok, Thailand"},
	{date:"Sep/2015-Dec/2015", company:"Crowsnest Residence, University of Calgary", position:"Fire Warden", volunteer:true, location:"Calgary, Canada"},
	{date:"Sep/2012-Sep/2013", company:"Innis Residence, University of Toronto", position:"InSight Mentor", volunteer:true, location:"Toronto, Canada"},
	{date:"Feb/2012", company:"University of Toronto", position:"Alternative Reading Week Job Shadower", volunteer:true, location:"Toronto, Canada"},
	{date:"Sep/2011-Apr/2014", company:"Japan-Canada Student Association at University of Toronto", position:"Language Exchange Participant", volunteer:true, location:"Toronto, Canada"},
];

var teaching_data = [
    {term:"Winter", year:2021, university:"Dalhousie University", position:"Instructor", course_code:"CSCI 4163/6610", course_name:"Human-Computer Interaction"},
	{term:"Summer", year:2020, university:"Dalhousie University", position:"Instructor", course_code:"CSCI 6055", course_name:"Research Methodology and Statistics"},
	{term:"Summer", year:2020, university:"Dalhousie University", position:"Course Developer", course_code:"CSCI 6055", course_name:"Research Methodology and Statistics"},
	{term:"Winter", year:2020, university:"Dalhousie University", position:"Teaching Assistant/Marker", course_code:"CSCI 6055/ECMM 6040", course_name:"Research Methodology and Statistics"},
	{term:"Winter", year:2020, university:"Dalhousie University", position:"Teaching Assistant/Marker", course_code:"CSCI 6610/CSCI 4163", course_name:"Human-Computer Interaction"},
	{term:"Fall", year:2019, university:"Dalhousie University", position:"Teaching Assistant/Marker", course_code:"CSCI 6307/CSCI 4169", course_name:"Usable Privacy and Security"},
	{term:"Fall", year:2019, university:"Dalhousie University", position:"Marker", course_code:"CSCI 6610/CSCI 4163", course_name:"Human-Computer Interaction"},
	{term:"Summer", year:2019, university:"Dalhousie University", position:"Teaching Assistant/Marker", course_code:"CSCI 6055", course_name:"Research Methodology and Statistics"},
	{term:"Winter", year:2019, university:"Dalhousie University", position:"Teaching Assistant/Marker", course_code:"CSCI 6610/CSCI 4163", course_name:"Human-Computer Interaction"},
	{term:"Fall", year:2018, university:"Dalhousie University", position:"Teaching Assistant/Marker", course_code:"CSCI 6610/CSCI 4163", course_name:"Human-Computer Interaction"},
	{term:"Winter", year:2018, university:"Dalhousie University", position:"Teaching Assistant/Marker", course_code:"CSCI 1101", course_name:"Computer Science II"},
	{term:"Fall", year:2017, university:"University of Calgary", position:"Teaching Assistant", course_code:"CSCP 203", course_name:"Introduction to Problem Solving Using Application Software"},
	{term:"Winter", year:2017, university:"University of Calgary", position:"Teaching Assistant", course_code:"SENG 513", course_name:"Web-Based System"},
	{term:"Winter", year:2016, university:"University of Calgary", position:"Teaching Assistant", course_code:"SENG 513", course_name:"Web-Based System"},
	{term:"Fall", year:2015, university:"University of Calgary", position:"Teaching Assistant", course_code:"CPSC 217", course_name:"Introduction to Computer Science for Multidisciplinary Studies I"},
	{term:"Fall", year:2013, university:"University of Toronto", position:"Teaching Assistant", course_code:"CSC 108", course_name:"Introduction to Programming"}
];

function render() {
    var target = document.getElementById('work_target');
    work_data.forEach((e) => {
        let newLi = document.createElement("li");
        newLi.setAttribute("class", "work twelve columns");

        let volunteer="";

        if (e.volunteer) {
            volunteer="<span class='volunteer'>Volunteer</span>";
        }

        newLi.innerHTML =  `<div class="company">${volunteer} ${e.company} <span class="time_right">${e.date}</span></div><div class="position">${e.position}</div>`;

        target.appendChild(newLi);
    });
    

    target = document.getElementById('teaching_target');
    teaching_data.forEach((e) => {
        let newLi = document.createElement("li");
        newLi.setAttribute("class", "work twelve columns");

        newLi.innerHTML =  `<span class="teaching_position">${e.position}</span> for <span class="teaching_position">${e.course_code}</span>: <span class="teaching_position">${e.course_name}</span><span class="time_right">${e.term}, ${e.year}</span><br/><span>${e.university}</span> `;
        target.appendChild(newLi);
    })
}