const openProf = document.getElementById("_profile");
const openAssess = document.getElementById("_assessment");
openProf.addEventListener("click", () => {
  window.open("./profile.html", "_self");
});

openAssess.addEventListener("click", () => {
  window.open("./assessment.html", "_blank");
});
