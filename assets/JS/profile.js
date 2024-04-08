const openHome = document.getElementById("_home");
const openAssess = document.getElementById("_assessment");
const openDikw = document.getElementById("_dikw");
const openDrug = document.getElementById("_drug");
openHome.addEventListener("click", () => {
  window.open("./index.html", "_self");
});

openAssess.addEventListener("click", () => {
  window.open("./assessment.html", "_self");
});

openDikw.addEventListener("click", () => {
  window.open("./dikw.html", "_self");
});

openDrug.addEventListener("click", () => {
  window.open("./drugResearch.html", "_self");
});
