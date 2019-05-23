document.addEventListener("DOMContentLoaded", start);


function start() {

document.querySelector(".burger_menu").addEventListener("click", function () {
    console.log("Hej med dig");
    document.querySelector("nav").classList.toggle("hidden");

    document.querySelector("header").classList.toggle("hidden");
    document.querySelector("main").classList.toggle("hidden");

});
}
