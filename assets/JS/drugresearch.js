const openProf = document.getElementById("_profile");
const openAssess = document.getElementById("_assessment");
const openDikw = document.getElementById("_dikw");
const openHome = document.getElementById("_home");

const openResult = document.getElementById("_result");
openProf.addEventListener("click", () => {
  window.open("./profile.html", "_self");
});

openAssess.addEventListener("click", () => {
  window.open("./assessment.html", "_self");
});

openDikw.addEventListener("click", () => {
  window.open("./dikw.html", "_self");
});
openHome.addEventListener("click", () => {
  window.open("./index.html", "_self");
});

openResult.addEventListener("click", () => {
  window.open("./questionnaire.html", "_self");
});
