const connect = document.getElementById("connect");
const arrowDown = document.querySelector(".arrow-connect");
const connectDropdown = document.querySelector(".connect-dropdown ul");
const mobileArrow = document.querySelector(".mobile-arrow-one");
const mobileIssues = document.getElementById("mobileIssues");
const closeBtn = document.querySelector(".close");
const openBtn = document.querySelector(".open");

connect.addEventListener("click", (e) => {
    connectDropdown.classList.toggle("active");
    arrowDown.classList.toggle("show");
    mobileArrow.classList.toggle("show");
});

openBtn.addEventListener("click", () => {
    mobileIssues.classList.add("live");
    openBtn.classList.add("live");
    closeBtn.classList.add("live");
});

closeBtn.addEventListener("click", () => {
    mobileIssues.classList.remove("live");
    openBtn.classList.remove("live");
    closeBtn.classList.remove("live");
});

document.addEventListener("click", (e) => {
    if(!connect.contains(e.target)){
        connectDropdown.classList.remove("active");
        arrowDown.classList.remove("show");
    }

});