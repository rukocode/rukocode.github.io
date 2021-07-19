// const menu = document.querySelector(".menu-toggle .hamburger");
const nav = document.querySelector("nav ul");

const icon = document.querySelector(".ehe2");
const close = document.querySelector(".menu-toggle .close");
const toggle = document.querySelector(".menu-toggle .hamburger");

const bottom_icon = document.querySelector(".ehe99");
const change = document.querySelector(".ehe99 .search1 a img");

// function hidden() {
//   icon.style.display = "none";
// }

toggle.addEventListener("click", function (abc) {
  nav.classList.toggle("slide");
  abc.target.style.backgroundColor = "white";

  // nav.classList.remove(hidden());
  // icon.classList.add("li");
  // icon.style.display = "none";
  icon.classList.toggle("none_icon");
  bottom_icon.classList.toggle("bottom_icon");
  change.innerHTML = "SEARCH";
  change.style.marginTop = "5px";
});

// close.addEventListener("click", function (abc) {
//   nav.classList.toggle("slide");
//   abc.target.style.display = "none";
//   toggle.style.display = "block";
// });
