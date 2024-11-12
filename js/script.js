// togle class active
const navbarNav = document.querySelector(".navbar-nav");

//ketika hambuger menu di klik
document.querySelector("#hambuger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik di luar sidebar untuk mehilangkan nav
const hambuger = document.querySelector('#hambuger-menu');

document.addEventListener("click", function (e) {
  if (!hambuger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
