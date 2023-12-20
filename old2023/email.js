// Anti-scraping idea from: https://www.matthewthom.as/blog/stop-email-scraping/

let acct = "hs.hu";
let dom = "dal.ca";

let email_element = document.getElementById("email");
email_element.innerHTML = `${acct}@${dom}`;
email_element.setAttribute("href", `mailto:${acct}@${dom}`);