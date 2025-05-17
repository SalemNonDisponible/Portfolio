
window.addEventListener("scroll", () => {
    const jsNav = document.getElementById("navigationSimple");

    if (window.scrollY > 76) {
        jsNav.style.visibility = "visible";
        jsNav.style.opacity = "1";        
    } else {
        jsNav.style.visibility = "hidden";
        jsNav.style.opacity = "0"; 

    }
})