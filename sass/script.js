const hamburger = document.getElementById("hamburger")
const navMenu = document.querySelector(".navbar__menu")

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

const icon = document.getElementById("icon");
const iconTwo = document.getElementById("icon-two")

icon.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default action
    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")){
        icon.src = "./assets/sun.png"
    }
    else{
        icon.src = "./assets/dark-mode.png"
    }
});

iconTwo.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default action
    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")){
        iconTwo.src = "./assets/sun.png"
    }
    else{
        iconTwo.src = "./assets/dark-mode.png"
    }
});

