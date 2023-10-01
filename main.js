const nav = document.querySelector("nav");

window.addEventListener("scroll", ()=> {
    if(window.scrollY>0)
        nav.classList.add("scrolled")
    else
        nav.classList.remove("scrolled")
})

const links = document.querySelector("nav ul"),
    menu = document.querySelector(".menu"),
    icon = document.querySelector(".menu img")
let isOpen = false;

menu.addEventListener("click", ()=> {
    isOpen = !isOpen
    if(isOpen)
        icon.src = `./images/icon-close.svg`
    else
        icon.src = `./images/icon-hamburger.svg`
    links.setAttribute(`style`, `display: ${isOpen? "flex": "none"}`)
})
