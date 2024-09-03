const btne = document.querySelector(".btne");
const body = document.querySelector("body");

const darkmood = () => body.classList.toggle("darkmood");

btne.addEventListener("click", darkmood);