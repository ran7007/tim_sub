document.addEventListener("DOMContentLoaded", () => {
    const ham = document.querySelector(".ham");
    const mgnb = document.querySelector(".mgnb");

    ham.addEventListener("click", () => {
        ham.classList.toggle("active");
        mgnb.classList.toggle("active");
    });

    const menuItems = document.querySelectorAll(".mgnb");
    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            ham.classList.remove("active");
            mgnb.classList.remove("active");
        });
    });
});

//메인
document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    function historyBgAnimation() {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".main_bg",
                start: "top 70%",
                end: "top 30%", // 끝나는 지점
                scrub: 1.5, // 부드러운 변화
                toggleActions: "play none none reverse",
            }
        });

        // fromTo로 수정하여 처음에는 작게 → 점점 커지도록 설정
        tl.fromTo(".main_bg",
            { opacity: 1, scale: 0.5, y: -10  }, // 시작 상태 (작음)
            { opacity: 1,  scale: 2.5, y: -150, duration: 1.5, ease: "power2.out" }

        );

        tl.to(".dark_overlay", {
            background: "rgba(0, 0, 0, 0.5)",
            duration: 0.6
        }, "-=0.8");

        tl.fromTo(".main_bg_text",
            { opacity: 0, y: 50 }, // 처음에는 안 보이게
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.4"
        );
    }
    function historyAreaPinAnimation() {
        ScrollTrigger.create({
            trigger: ".main",
            pin: ".main_bg",
            start: "top top",
            end: "bottom 100%",
            scrub: 1, 
            pinSpacing: true,
            invalidateOnRefresh: true,
        });
    }

    function addScrolledClass() {
        gsap.timeline({
            scrollTrigger: {
                trigger: ".main",
                start: "top 30%", // 스크롤 시작점
                end: "bottom 100%",
                toggleClass: { targets: ".main", className: "scrolled" },
                toggleActions: "play none none reverse",
                scrub: 1
            }
        });
    }
    historyBgAnimation();
    historyAreaPinAnimation();
    addScrolledClass();
});


    // 스크롤 시 고정 유지
    document.addEventListener("DOMContentLoaded", function () {
        let mainYearBottom = document.querySelector(".main_year_bottom");
        let yearItems = document.querySelectorAll(".main_year_bottom ul li");
        let progressBar = document.querySelector(".main_year_bottom .progress");
        let sections = document.querySelectorAll("section[class^='History_']");
    
        let mainYearBottomOffset = mainYearBottom.offsetTop;
        let isFixed = false;
    
        window.addEventListener("scroll", function () {
            let scrollY = window.scrollY;
            let windowHeight = window.innerHeight;
            let scrollPosition = scrollY + windowHeight / 2; // 화면 중앙 기준
    
            // 📌 특정 위치를 지나면 상단 고정
            if (scrollY > mainYearBottomOffset) {
                if (!isFixed) {
                    mainYearBottom.classList.add("fixed");
                    isFixed = true;
                }
            } else {
                if (isFixed) {
                    mainYearBottom.classList.remove("fixed");
                    isFixed = false;
                }
            }
    
            // 🔥 기존 볼더 선(progress bar) 채우기 
            sections.forEach((section, index) => {
                let sectionTop = section.offsetTop;
                let sectionBottom = sectionTop + section.offsetHeight;
    
                if (scrollPosition >= sectionTop) {
                    //불 켜짐
                    yearItems[index]?.classList.add("active");
    
                    // 기존 볼더 선 위에 점점 채워지는 효과
                    let progressWidth = ((index + 1) / sections.length) * 100;
                    progressBar.style.width = progressWidth + "%";
    
                    // 버튼(불)
                    let activeButton = yearItems[index].querySelector("i");
                    if (activeButton) {
                        activeButton.style.backgroundColor = "#F0A550"; // 색상 변경
                    }
                } else {
                    //불이 다시 꺼지도록 (스크롤 위로 올릴 때)
                    yearItems[index]?.classList.remove("active");
    
                    let inactiveButton = yearItems[index].querySelector("i");
                    if (inactiveButton) {
                        inactiveButton.style.backgroundColor = "#D9D9D9"; // 원래 색상
                    }
                }
            });
        });
    });
    
    
    
    