"use strict";

$("nav > a").click(function () {
  var target = "#" + $(this).attr("data");
  $(".content").not(target).slideUp(function () {
    $(target).slideDown();
  });
});


$(".content").not("#home").hide();

function education() {
  const eList = educationModel.map(function(x) {
    const accent = {
      "borderLeft": "0.5em " + x.color + " solid",
      "paddingLeft": "0.5em",
      "backgroundImage": "url(location_img/" + x.locationImg + ")",
      "backgroundPosition": "centered"
    };

    return (
      <div key={x.degree} className="block" style={accent}>
        {x.end &&
          <div className="block head">{x.name} [{x.start} until {x.end}]</div>
        }
        {!x.end &&
          <div className="block head">{x.name} [{x.start}]</div>
        }
        <div>Degree: {x.degree}</div>
        <div>Program: {x.program}</div>
      </div>
    );
  });

  return (<div>
    <h1>Education</h1>
    {eList}
  </div>);
}

function scholarship() {
  const eList = scholarshipModel.map(function(x, i) {
    const accent = {
      "borderLeft": "0.5em teal solid",
      "paddingLeft": "0.5em",
      "backgroundColor": (i % 2 == 0) ? "rgba(255, 255, 255, 0.2)" : "transparent"
    };

    return (
      <div key={x.name} className="block" style={accent}>
        {x.end &&
          <div className="block head">{x.name} [{x.start} until {x.end}]</div>
        }
        {!x.end &&
          <div className="block head">{x.name} [{x.start}]</div>
        }
        <div>Grantor: {x.grantor}</div>
      </div>
    );
  });

  return (<div>
    <h1>Scholarships</h1>
    {eList}
  </div>);
}

function teaching() {
  const eList = teachingModel.map(function(x, i) {
    const season = x.term.split(" ")[0].toLowerCase();

    let color;

    switch(season) {
      case "fall":
        color = "orange";
        break;
      case "winter":
        color = "lightblue";
        break;
      case "summer":
        color = "red";
        break;
    }

    const accent = {
      "borderLeft": "0.5em " + color + " solid",
      "paddingLeft": "0.5em",
      "backgroundColor": (i % 2 == 0) ? "rgba(255, 255, 255, 0.2)" : "transparent"
    };

    return (
      <div key={x.term} className="block" style={accent}>
        <div className="block head">{x.role} for {x.className}</div>
        <div>Code: {x.classCode}</div>
        <div>Term: {x.term}</div>
        <div>University: {x.university}</div>
      </div>
    );
  });

  return (<div>
    <h1>Teaching</h1>
    {eList}
  </div>);
}

function project() {

  const eList = projectModel.map(function(x, i) {
    const accent = {
      "borderLeft": "0.5em teal solid",
      "paddingLeft": "0.5em",
      "backgroundColor": (i % 2 == 0) ? "rgba(255, 255, 255, 0.2)" : "transparent"
    };

    return (
      <div key={x.name} className="block" style={accent}>
        <div className="block head">{x.name}</div>
        <div>Description: {x.description}</div>
        {x.link &&
          <a href={x.link}>Project's Webiste</a>
        }
      </div>
    );
  });

  return (<div>
    <h1>Projects</h1>
    {eList}
  </div>);
}

function job() {

  const eList = jobModel.map(function(x) {
    const accent = {
      "borderLeft": "0.5em " + x.color + " solid",
      "paddingLeft": "0.5em",
      "backgroundImage": "url(location_img/" + x.locationImg + ")",
      "backgroundPosition": "centered"
    };


    return (
      <div key={x.start} className="block" style={accent}>
        <div className="block head">{x.name} [{x.start} until {x.end}]</div>
        <div>Company/Institute: {x.company}</div>
        <div>Location: {x.location}</div>
        <div>Description: {x.description}</div>
      </div>
    );
  });

  return (<div>
    <h1>Jobs</h1>
    {eList}
  </div>);
}

function volunteer() {
  const eList = volunteerModel.map(function(x, i) {
    const accent = {
      "borderLeft": "0.5em teal solid",
      "paddingLeft": "0.5em",
      "backgroundColor": (i % 2 == 0) ? "rgba(255, 255, 255, 0.2)" : "transparent"
    };

    return (
      <div key={x.start} className="block" style={accent}>
        <div className="block head">{x.name} [{x.start} until {x.end}]</div>
        <div>Organization: {x.organization}</div>
        <div>Affiliation: {x.affiliation}</div>
      </div>
    );
  });

  return (<div>
    <h1>Volunteer</h1>
    {eList}
  </div>);
}

let promises = [
  new Promise(function(resolve, reject) {ReactDOM.render(education(), document.getElementById('education')); resolve();}),
  new Promise(function(resolve, reject) {ReactDOM.render(scholarship(), document.getElementById('scholarship')); resolve();}),
  new Promise(function(resolve, reject) {ReactDOM.render(teaching(), document.getElementById('teaching')); resolve();}),
  new Promise(function(resolve, reject) {ReactDOM.render(project(), document.getElementById('project')); resolve();}),
  new Promise(function(resolve, reject) {ReactDOM.render(job(), document.getElementById('job')); resolve();}),
  new Promise(function(resolve, reject) {ReactDOM.render(volunteer(), document.getElementById('volunteer')); resolve();})
];

Promise.all(promises).then(function() {
  $("#loading").fadeOut();
  });
