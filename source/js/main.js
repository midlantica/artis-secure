var home = "Home";
var threat = "Threat Modelling";
var secureCode = "Secure Coding Patterns";
var secureEng = "Secure Engineering";
var about = "About";

var bodyClass = document.body.className;
var navText = document.querySelector('.nav-toggle');
// var navText = document.getElementsByClassName('nav-toggle');

if (bodyClass == "index") {
  navText.innerHTML = home;
}

if (bodyClass == "threatModelling") {
  navText.innerHTML = threat;
}

if (bodyClass == "secureCodingPatterns") {
  navText.innerHTML = secureCode;
}

if (bodyClass == "secureEngineering") {
  navText.innerHTML = secureEng;
}

if (bodyClass == "about") {
  navText.innerHTML = about;
}

  // var bodyThreat = document.getElementsByClassName('threatModelling');
  // bodyThreat.textContent = threat;

  // var bodySecure = document.getElementsByClassName('secureCodingPatterns');
  // bodySecure.textContent = secureCode;

  // var bodySecureEng = document.getElementsByClassName('secureEngineering');
  // bodySecureEng.textContent = secureEng;

  // var bodyAbout = document.getElementsByClassName('about');
  // bodyAbout.textContent = about;
