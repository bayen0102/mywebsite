document.addEventListener("DOMContentLoaded", function () {
  
    let backToTopBtn = document.getElementById("backToTop");

    window.onscroll = function () {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    };

    // click the button to smoothly scroll back to the top
    window.topFunction = function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // ========== scroll fade-in animation==========
    let fadeElements = document.querySelectorAll(".fade-in");

    function checkVisibility() {
        fadeElements.forEach((element) => {
            let rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                element.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); //execute once on initialization


    

    // ========== Skills animation ==========
    function updateSkillBars() {
        let skillBars = document.querySelectorAll('.skill-bar');
        skillBars.forEach(bar => {
            let level = bar.dataset.level;
            bar.style.width = level + '%';
        });
    }

    // if the current page contains a skills section, execute the animation
    if (document.querySelector(".skills-container")) {
        updateSkillBars();
    }

    // ========== responsive sidebar (mobile menu) ==========
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});



