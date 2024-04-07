const openProf = document.getElementById("_profile");
const openAssess = document.getElementById("_assessment");
const openSource = document.getElementById("_source");
openProf.addEventListener("click", () => {
  window.open("./profile.html", "_self");
});

openAssess.addEventListener("click", () => {
  window.open("./assessment.html", "_blank");
});

openSource.addEventListener("click", () => {
  window.open(
    "https://www.who.int/health-topics/diabetes#tab=tab_1",
    "_blank "
  );
});
