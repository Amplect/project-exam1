const header = document.querySelector("header");


function handleScroll() {
    console.log(window.scrollY);

    const scrolledY = window.scrollY;

    if (scrolledY > 30) {
        header.classList.add("scrolled");
        
        
    } else {
        header.classList.remove("scrolled");
        
        
    }
}

window.addEventListener("scroll", handleScroll);

