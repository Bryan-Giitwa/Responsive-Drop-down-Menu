const mainMenu = document.querySelector(".navigation");
const closeMenu = document.querySelector(".close-icon");
const openMenu = document.querySelector(".burger-menu");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}

function close() {
  mainMenu.style.top = "-100%";
}
