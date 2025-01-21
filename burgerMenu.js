const menu = document.querySelector("#menu");
const open = document.querySelector("#openBurger");
const close = document.querySelector("#closeBurger");

open.addEventListener("click", () => {
    menu.classList.add("visible");
});

close.addEventListener("click", () => {
    menu.classList.remove("visible");
});