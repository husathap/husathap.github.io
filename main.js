"use strict";

$("nav > a").click(function () {
  var target = "#" + $(this).attr("data");
  $(".content").not(target).slideUp(function () {
    $(target).slideDown();
  });
});

$(".content").not("#home").hide();

function education() {
  const eList = educationModel.map(function (x) {
    const accent = {
      "borderLeft": "0.5em " + x.color + " solid",
      "paddingLeft": "0.5em",
      "backgroundImage": "url(location_img/" + x.locationImg + ")",
      "backgroundPosition": "centered"
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
  const eList = scholarshipModel.map(function (x, i) {
    const accent = {
      "borderLeft": "0.5em teal solid",
      "paddingLeft": "0.5em",
      "backgroundColor": i % 2 == 0 ? "rgba(255, 255, 255, 0.2)" : "transparent"
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
  const eList = teachingModel.map(function (x, i) {
    const season = x.term.split(" ")[0].toLowerCase();

    let color;

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

    const accent = {
      "borderLeft": "0.5em " + color + " solid",
      "paddingLeft": "0.5em",
      "backgroundColor": i % 2 == 0 ? "rgba(255, 255, 255, 0.2)" : "transparent"
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

  const eList = projectModel.map(function (x, i) {
    const accent = {
      "borderLeft": "0.5em teal solid",
      "paddingLeft": "0.5em",
      "backgroundColor": i % 2 == 0 ? "rgba(255, 255, 255, 0.2)" : "transparent"
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

  const eList = jobModel.map(function (x) {
    const accent = {
      "borderLeft": "0.5em " + x.color + " solid",
      "paddingLeft": "0.5em",
      "backgroundImage": "url(location_img/" + x.locationImg + ")",
      "backgroundPosition": "centered"
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
  const eList = volunteerModel.map(function (x, i) {
    const accent = {
      "borderLeft": "0.5em teal solid",
      "paddingLeft": "0.5em",
      "backgroundColor": i % 2 == 0 ? "rgba(255, 255, 255, 0.2)" : "transparent"
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

let promises = [new Promise(function (resolve, reject) {
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
