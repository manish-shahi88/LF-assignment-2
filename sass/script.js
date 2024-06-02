// const hamburger = document.querySelector(".hamburger")
// const navMenu = document.querySelector(".navbar__menu")

// hamburger.addEventListener("click",()=>{
//     hamburger.classList.toggle("active")
//     navMenu.classList.toggle("active")
// })


// // darkmode
// document.addEventListener("DOMContentLoaded", function() {
//     const sun_icon = document.getElementById("icon");
//     sun_icon.onclick = function() {
//         document.body.classList.toggle("dark-theme");
//     }
// });

document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".navbar__menu");
    const sunIcon = document.getElementById("icon");

    // Toggle hamburger menu
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // Toggle dark/light mode
    sunIcon.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
    });
});
