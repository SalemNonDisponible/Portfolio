
window.addEventListener("scroll", () => {
    const jsNav = document.getElementById("navigation");

    if (window.scrollY > 76) {
        jsNav.classList.add("scroll-nav");
        
    } else {
        jsNav.classList.remove("scroll-nav");

    }
})