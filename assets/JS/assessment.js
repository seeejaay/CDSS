const openHome = document.getElementById("_home");
const openProf = document.getElementById("_profile");
openHome.addEventListener("click", () => {
  window.open("./index.html", "_self");
});

openProf.addEventListener("click", () => {
  window.open("./profile.html", "_self");
});
