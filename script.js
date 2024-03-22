const bars = document.querySelector(".bars");

const nav = document.querySelector("#navbar");

const cross = document.querySelector("#close");

bars.addEventListener("click", function () {
  nav.classList.add("active-menu");
});

cross.addEventListener("click", function () {
  nav.classList.add("close-menu");
});
