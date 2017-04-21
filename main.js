"use strict";

$("nav > a").click(function () {
  var target = "#" + $(this).attr("data");
  $("#academic-nav").hide();
  $(".content").not(target).slideUp(function () {
    $(target).slideDown();
  });
});

$("#academic-toggle").click(function() {
  $("#academic-nav").toggle();
})

$(".content").hide();
$("#academic-nav").hide();

function education() {
  var eList = educationModel.map(function (x) {
    return React.createElement(
      "div",
      { key: x.degree, className: "block" },
      x.end && React.createElement(
        "div",
        { className: "block head" },
        x.name,
        " [",
        x.start,
        " until ",
        x.end,
        "]"
      ),
      !x.end && React.createElement(
        "div",
        { className: "block head" },
        x.name,
        " [",
        x.start,
        "]"
      ),
      React.createElement(
        "div",
        null,
        "Degree: ",
        x.degree
      ),
      React.createElement(
        "div",
        null,
        "Program: ",
        x.program
      )
    );
  });

  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Education"
    ),
    eList
  );
}

function scholarship() {
  var eList = scholarshipModel.map(function (x) {
    return React.createElement(
      "div",
      { key: x.name, className: "block" },
      x.end && React.createElement(
        "div",
        { className: "block head" },
        x.name,
        " [",
        x.start,
        " until ",
        x.end,
        "]"
      ),
      !x.end && React.createElement(
        "div",
        { className: "block head" },
        x.name,
        " [",
        x.start,
        "]"
      ),
      React.createElement(
        "div",
        null,
        "Grantor: ",
        x.grantor
      )
    );
  });

  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Scholarships"
    ),
    eList
  );
}

function teaching() {
  var eList = teachingModel.map(function (x) {
    return React.createElement(
      "div",
      { key: x.term, className: "block" },
      React.createElement(
        "div",
        { className: "block head" },
        x.classCode,
        ": ",
        x.className
      ),
      React.createElement(
        "div",
        null,
        "Term: ",
        x.term
      ),
      React.createElement(
        "div",
        null,
        "University: ",
        x.university
      )
    );
  });

  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Teaching"
    ),
    eList
  );
}

function project() {
  var eList = projectModel.map(function (x) {
    return React.createElement(
      "div",
      { key: x.name, className: "block" },
      React.createElement(
        "div",
        { className: "block head" },
        x.name
      ),
      React.createElement(
        "div",
        null,
        "Description: ",
        x.description
      ),
      x.link && React.createElement(
        "a",
        { href: x.link },
        "Project's Webiste"
      )
    );
  });

  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Projects"
    ),
    eList
  );
}

function job() {
  var eList = jobModel.map(function (x) {
    return React.createElement(
      "div",
      { key: x.start, className: "block" },
      React.createElement(
        "div",
        { className: "block head" },
        x.name,
        " [",
        x.start,
        " until ",
        x.end,
        "]"
      ),
      React.createElement(
        "div",
        null,
        "Company/Institute: ",
        x.company
      ),
      React.createElement(
        "div",
        null,
        "Location: ",
        x.location
      ),
      React.createElement(
        "div",
        null,
        "Description: ",
        x.description
      )
    );
  });

  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Jobs"
    ),
    eList
  );
}

function volunteer() {
  var eList = volunteerModel.map(function (x) {
    return React.createElement(
      "div",
      { key: x.start, className: "block" },
      React.createElement(
        "div",
        { className: "block head" },
        x.name,
        " [",
        x.start,
        " until ",
        x.end,
        "]"
      ),
      React.createElement(
        "div",
        null,
        "Organization: ",
        x.organization
      ),
      React.createElement(
        "div",
        null,
        "Affiliation: ",
        x.affiliation
      )
    );
  });

  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Volunteer"
    ),
    eList
  );
}

var promises = [new Promise(function (resolve, reject) {
  ReactDOM.render(education(), document.getElementById('education'));resolve();
}), new Promise(function (resolve, reject) {
  ReactDOM.render(scholarship(), document.getElementById('scholarship'));resolve();
}), new Promise(function (resolve, reject) {
  ReactDOM.render(teaching(), document.getElementById('teaching'));resolve();
}), new Promise(function (resolve, reject) {
  ReactDOM.render(project(), document.getElementById('project'));resolve();
}), new Promise(function (resolve, reject) {
  ReactDOM.render(job(), document.getElementById('job'));resolve();
}), new Promise(function (resolve, reject) {
  ReactDOM.render(volunteer(), document.getElementById('volunteer'));resolve();
})];

Promise.all(promises).then(function () {
  $("#loading").fadeOut();
});
