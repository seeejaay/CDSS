const openProf = document.getElementById("_profile");
const openAssess = document.getElementById("_assessment");
const openSource = document.getElementById("_source");
const openDikw = document.getElementById("_dikw");
const openDrug = document.getElementById("_drug");
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
openSource.addEventListener("click", () => {
  window.open(
    "https://www.who.int/health-topics/diabetes#tab=tab_1",
    "_blank "
  );
});

openDrug.addEventListener("click", () => {
  window.open("./drugResearch.html", "_self");
});

openResult.addEventListener("click", () => {
  window.open("./questionnaire.html", "_self");
});
