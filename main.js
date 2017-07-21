"use strict";

$("nav > a").click(function () {
  var target = "#" + $(this).attr("data");
  $(".content").not(target).slideUp(function () {
    $(target).slideDown();
  });
});

$(".content").not("#home").hide();

function education() {
  var eList = educationModel.map(function (x) {
    var accent = {
      "borderLeft": "0.5em " + x.color + " solid",
      "paddingLeft": "0.5em"
    };

    return React.createElement(
      "div",
      { key: x.degree, className: "block", style: accent },
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
  var eList = scholarshipModel.map(function (x, i) {
    var accent = {
      "borderLeft": "0.5em teal solid",
      "paddingLeft": "0.5em"
    };

    return React.createElement(
      "div",
      { key: x.name, className: "block", style: accent },
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
  var eList = teachingModel.map(function (x, i) {
    var season = x.term.split(" ")[0].toLowerCase();

    var color = void 0;

    switch (season) {
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

    var accent = {
      "borderLeft": "0.5em " + color + " solid",
      "paddingLeft": "0.5em"
    };

    return React.createElement(
      "div",
      { key: x.term, className: "block", style: accent },
      React.createElement(
        "div",
        { className: "block head" },
        x.role,
        " for ",
        x.className
      ),
      React.createElement(
        "div",
        null,
        "Code: ",
        x.classCode
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

  var eList = projectModel.map(function (x, i) {
    var accent = {
      "borderLeft": "0.5em teal solid",
      "paddingLeft": "0.5em"
    };

    return React.createElement(
      "div",
      { key: x.name, className: "block", style: accent },
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
    var accent = {
      "borderLeft": "0.5em " + x.color + " solid",
      "paddingLeft": "0.5em"
    };

    return React.createElement(
      "div",
      { key: x.start, className: "block", style: accent },
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
  var eList = volunteerModel.map(function (x, i) {
    var accent = {
      "borderLeft": "0.5em teal solid",
      "paddingLeft": "0.5em"
    };

    return React.createElement(
      "div",
      { key: x.start, className: "block", style: accent },
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