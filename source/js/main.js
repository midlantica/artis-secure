var section = {
    home       : 'Home',
    threat     : 'Threat Modelling',
    secureCode : 'Secure Coding Patterns',
    secureEng  : 'Secure Engineering',
    about      : 'About'
};

var bodyClass = document.body.className;
var navText = document.querySelector('.nav-toggle');

if (bodyClass == "index") {
  navText.textContent = section.home;
}

if (bodyClass == "threatModelling") {
  navText.textContent = section.threat;
}

if (bodyClass == "secureCodingPatterns") {
  navText.textContent = section.secureCode;
}

if (bodyClass == "secureEngineering") {
  navText.textContent = section.secureEng;
}

if (bodyClass == "about") {
  navText.textContent = section.about;
}
