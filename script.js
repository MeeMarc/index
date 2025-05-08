// Function to make the navigation bar shrink when scrolling
window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.padding = "10px 50px";
    } else {
        header.style.padding = "15px 50px";
    }
});

// Smooth scrolling function with offset for fixed navbar
document.querySelectorAll(".nav-item a").forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const sectionId = this.getAttribute("href").substring(1);
        const section = document.getElementById(sectionId);
        
        if (section) {
            const navbarHeight = document.querySelector("header").offsetHeight; // Get navbar height
            const viewportHeight = window.innerHeight;
            const sectionHeight = section.offsetHeight;
            let offset = (viewportHeight - sectionHeight) / 2; // Center section

            // Ensure offset is not negative (in case the section is taller than the viewport)
            if (offset < 0) offset = navbarHeight + 20;

            const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: sectionPosition - offset, 
                behavior: "smooth"
            });
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    });
});

// Make MEEMARC Logo act like Home button
document.querySelector(".logo").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
