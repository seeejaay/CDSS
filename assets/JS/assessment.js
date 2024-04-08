const openHome = document.getElementById("_home");
const openProf = document.getElementById("_profile");
const openDikw = document.getElementById("_dikw");
openHome.addEventListener("click", () => {
  window.open("./index.html", "_self");
});

openProf.addEventListener("click", () => {
  window.open("./profile.html", "_self");
});
openDikw.addEventListener("click", () => {
  window.open("./dikw.html", "_self");
});
