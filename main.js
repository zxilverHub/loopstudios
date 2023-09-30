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
    icon.src = `/images/icon-${isOpen? "close": "hamburger"}.svg`
    links.setAttribute(`style`, `display: ${isOpen? "flex": "none"}`)
})