// Anti-scraping idea from: https://www.matthewthom.as/blog/stop-email-scraping/

let acct = "hus";
let dom = "algomau.ca";

let email_element = document.getElementById("email");
email_element.innerHTML = `<i class="bi bi-envelope-at-fill" aria-hidden="true"></i> Email</a>: ${acct}@${dom}`;
email_element.setAttribute("href", `mailto:${acct}@${dom}`);