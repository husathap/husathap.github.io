$("nav > a").click(function() {
  let target = "#" + $(this).attr("data");
  $(".content").not(target).slideUp(function() {
    $(target).slideDown();
  });
});

$(".content").hide();

function education() {
  const eList = educationModel.map(function(x) {
    return (
      <div key={x.degree} className="block">
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
  const eList = scholarshipModel.map(function(x) {
    return (
      <div key={x.name} className="block">
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
    <h1>Scholarships/Awards</h1>
    {eList}
  </div>);
}

function teaching() {
  const eList = teachingModel.map(function(x) {
    return (
      <div key={x.term} className="block">
        <div className="block head">{x.classCode}: {x.className}</div>
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
  const eList = projectModel.map(function(x) {
    return (
      <div key={x.name} className="block">
        <div className="block head">{x.name}</div>
        <div>Description: {x.description}</div>
        {x.link &&
          <a href={x.link}>Project''s Webiste</a>
        }
      </div>
    );
  });

  return (<div>
    <h1>Project</h1>
    {eList}
  </div>);
}

function job() {
  const eList = jobModel.map(function(x) {
    return (
      <div key={x.start} className="block">
        <div className="block head">{x.name} [{x.start} until {x.end}]</div>
        <div>Company/Institute: {x.company}</div>
        <div>Location: {x.location}</div>
        <div>Description: {x.description}</div>
      </div>
    );
  });

  return (<div>
    <h1>Professional Experience</h1>
    {eList}
  </div>);
}

function volunteer() {
  const eList = volunteerModel.map(function(x) {
    return (
      <div key={x.start} className="block">
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
