// Anti-scraping idea from: https://www.matthewthom.as/blog/stop-email-scraping/

let acct = "hs.hu";
let dom = "dal.ca";

document.getElementById("email").innerHTML = `<a href="mailto:${acct}@${dom}">${acct}@${dom}</a>`;