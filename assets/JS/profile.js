const openHome = document.getElementById("_home");
const openAssess = document.getElementById("_assessment");
openHome.addEventListener("click", () => {
  window.open("./index.html", "_self");
});

openAssess.addEventListener("click", () => {
  window.open("./assessment.html", "_blank");
});
