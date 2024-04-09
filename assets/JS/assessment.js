const openHome = document.getElementById("_home");
const openProf = document.getElementById("_profile");
const openDikw = document.getElementById("_dikw");
const openDrug = document.getElementById("_drug");
const openResult = document.getElementById("_result");
openHome.addEventListener("click", () => {
  window.open("./index.html", "_self");
});

openProf.addEventListener("click", () => {
  window.open("./profile.html", "_self");
});
openDikw.addEventListener("click", () => {
  window.open("./dikw.html", "_self");
});

openDrug.addEventListener("click", () => {
  window.open("./drugResearch.html", "_self");
});

openResult.addEventListener("click", () => {
  window.open("./questionnaire.html", "_self");
});
