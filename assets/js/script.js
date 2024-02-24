const documentHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
};

const slideBtn = document.querySelector(".slide-btn");
const slideContent = document.querySelector(".slide-content");
const closeBtn = document.querySelector(".close-btn");
const main = document.querySelector(".main");
const mainContent = document.querySelector(".about-content");
const body = document.querySelector("body");
const menuBtn = document.querySelector(".menu-opener");
const dropdownMenu = document.querySelector(".dropdown-menu");
const mobileBtn = document.querySelector(".mobile-btn");
const mobileBtnUi = document.querySelector(".mobile-btn svg");
const mobileMenu = document.querySelectorAll(".contact-block");

const anchorTags = document.querySelectorAll(".js-href");
if (anchorTags) {
    anchorTags.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();

            const href = link.getAttribute("href");
            document.querySelector(href).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
}

const openContent = (button, content) => {
    button.addEventListener("click", () => {
        if (content.classList.contains(open)) {
            content.classList.remove("open");
            main.style.color = "inherit";
            main.style.filter = "blur(0px)";
            mainContent.style.cursor = "inherit";
            closeBtn.style.opacity = "0";
            setTimeout(() => {
                body.style.overflowY = "scroll";
            }, 500);

        } else {
            content.classList.add("open");
            main.style.color = "var(--sc-color)";
            main.style.filter = "blur(3px)";
            mainContent.style.cursor = "default";
            body.style.overflowY = "hidden";
            setTimeout(() => {
                closeBtn.style.opacity = "1";
            }, 1000);
        }
    });
}

const closeContent = (close, content) => {
    close.addEventListener("click", () => {
        content.classList.remove("open");
        main.style.color = "inherit";
        main.style.filter = "blur(0px)";
        mainContent.style.cursor = "inherit";
        closeBtn.style.opacity = "0";
        setTimeout(() => {
            body.style.overflowY = "scroll";
        }, 500);
    });
}

const toggleMenu = (button, menu) => {
    button.addEventListener("click", () => {
        if (mobileBtnUi) {
            mobileBtnUi.classList.toggle("rotate");
        };
        // menu.forEach(element => {
        //     element.classList.toggle("visible");
        // });
        menu.classList.toggle("visible");
    })
}

window.addEventListener("load", () => {
    history.scrollRestoration = "manual";
    documentHeight();
    // openContent(slideBtn, slideContent);
    // closeContent(closeBtn, slideContent);
    toggleMenu(menuBtn, dropdownMenu);
    // toggleMenu(mobileBtn, mobileMenu);
});

window.addEventListener("resize", () => {
    documentHeight();
});