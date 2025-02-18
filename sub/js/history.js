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
                end: "top 40%", // 끝나는 지점
                scrub: 1, // 부드러운 변화
                toggleActions: "play none none reverse",
            }
        });

        // fromTo로 수정하여 처음에는 작게 → 점점 커지도록 설정
        tl.fromTo(".main_bg",
            { opacity: 1, scale: 0.35, y: 0 }, // 시작 상태 (작음)
            { opacity: 1, scale: 3, y: -80, duration: 1.5, ease: "power2.out" } // 최종 상태 (커짐)

        );

        tl.to(".dark_overlay", {
            background: "rgba(0, 0, 0, 0.5)",
            duration: 1
        }, "-=1");

        tl.fromTo(".main_bg_text",
            { opacity: 0, y: 50 }, // 처음에는 안 보이게
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "-=0.5"
        );
    }

    function historyAreaPinAnimation() {
        ScrollTrigger.create({
            trigger: ".main",
            pin: ".main_bg",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            invalidateOnRefresh: true,
        });
    }

    function addScrolledClass() {
        gsap.timeline({
            scrollTrigger: {
                trigger: ".main",
                start: "top 20%", // 스크롤 시작점
                end: "bottom top",
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
// `scrolled` 클래스 추가하는 부분 추가
function addScrolledClass() {
    gsap.timeline({
        scrollTrigger: {
            trigger: ".main",
            start: "top 30%", // 스크롤 시작점
            end: "bottom top",
            toggleClass: { targets: ".main", className: "scrolled" },
            toggleActions: "play none none reverse",
            scrub: 1
        }
    });
}



//연혁
document.addEventListener("DOMContentLoaded", function () {
    let mainYearBottom = document.querySelector(".main_year_bottom");
    let placeholder = document.querySelector(".placeholder");

    // main_year_bottom의 원래 위치를 저장
    let originalOffsetTop = mainYearBottom.getBoundingClientRect().top + window.scrollY;

    window.addEventListener("scroll", function () {
        if (window.scrollY > originalOffsetTop) {
            mainYearBottom.classList.add("fixed");
            placeholder.style.display = "block";
        } else {
            mainYearBottom.classList.remove("fixed");
            placeholder.style.display = "none";
        }
    });
});
