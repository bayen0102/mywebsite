document.addEventListener("DOMContentLoaded", function () {
    // ========== 回到頂部按鈕功能 ==========
    let backToTopBtn = document.getElementById("backToTop");

    // 當用戶向下滾動 300px，顯示按鈕
    window.onscroll = function () {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    };

    // 點擊按鈕，平滑滾動回頂部
    window.topFunction = function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // ========== 滾動淡入動畫 ==========
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
    checkVisibility(); // 初始化時執行一次


    

    // ========== 技能條動畫（Skills） ==========
    function updateSkillBars() {
        let skillBars = document.querySelectorAll('.skill-bar');
        skillBars.forEach(bar => {
            let level = bar.dataset.level;
            bar.style.width = level + '%';
        });
    }

    // 如果當前頁面有技能區塊，則執行動畫
    if (document.querySelector(".skills-container")) {
        updateSkillBars();
    }

    // ========== 響應式側邊欄（手機版選單） ==========
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});


