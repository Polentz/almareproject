const slideBtn = document.querySelector(".slider-btn");
const slideContent = document.querySelector(".slider-content");
const closeBtn = slideContent.querySelector(".close-btn");
const main = document.querySelector(".main");
const mainContent = document.querySelectorAll(".grid-layout");
const body = document.querySelector("body");
const menuBtn = document.querySelector(".menu-opener");
const dropdownMenu = document.querySelector(".dropdown-menu");
const mainMenu = document.querySelector(".main-menu")
const menuItems = dropdownMenu.querySelectorAll(".menu-item");
const mobileBtn = document.querySelector(".mobile-btn");
const mobileBtnUi = document.querySelector(".mobile-btn svg");
const mobileMenu = document.querySelectorAll(".contact-block");
const header = document.querySelector(".header");
const mediaQuery = window.matchMedia("(max-width: 620px)");

const documentHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
};

const anchorTags = document.querySelectorAll(".js-href");
if (anchorTags) {
    anchorTags.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const href = link.getAttribute("href");
            const offset = document.querySelector(".main-menu").offsetHeight;
            const elementPosition = document.querySelector(href).getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        });
    });
};

const agendaBlocks = document.querySelectorAll(".agenda-block");
agendaBlocks.forEach(event => {
    event.parentNode.parentNode.id = "agenda";
});

const openContent = (button, content) => {
    button.addEventListener("click", () => {
        content.classList.add("open");
        main.classList.add("blur");
        header.classList.add("blur");
        gsap.set(closeBtn, {
            opacity: 0,
        });
        gsap.to(closeBtn, {
            opacity: 1,
            duration: .25,
            delay: .5,
        });
    });
}

const closeContent = (close, content) => {
    close.addEventListener("click", () => {
        content.classList.remove("open");
        main.classList.remove("blur");
        header.classList.remove("blur");
        gsap.to(closeBtn, {
            opacity: 0,
            duration: .5,
        });
    });
}

const toggleMenu = (button, menu, menuItems) => {
    button.addEventListener("click", () => {
        menu.classList.toggle("visible");
        menu.parentNode.classList.toggle("border");
        gsap.set(".dropdown-menu-items", {
            opacity: 0,
        });
        gsap.to(".dropdown-menu-items", {
            opacity: 1,
            duration: .5,
            stagger: .05,
        });
        const handleMediaQuery = (e) => {
            if (e.matches) {
                mainMenu.classList.toggle("visible");
                gsap.set(".menu-item", {
                    opacity: 0,
                });
                gsap.to(".menu-item", {
                    opacity: 1,
                    duration: .5,
                    stagger: .05,
                });
            }
        };
        mediaQuery.addListener(handleMediaQuery);
        handleMediaQuery(mediaQuery);
    });
    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            menu.classList.remove("visible");
            menu.parentNode.classList.remove("border");
            const handleMediaQuery = (e) => {
                if (e.matches) {
                    mainMenu.classList.remove("visible");
                };
            };
            mediaQuery.addListener(handleMediaQuery);
            handleMediaQuery(mediaQuery);
        });
    });


};

const hideMenuOnScroll = (menu) => {
    let lastScrollTop = 0;
    const scrolled = window.scrollY || document.documentElement.scrollTop;
    if (scrolled > lastScrollTop) {
        menu.classList.remove("visible");
        menu.parentNode.classList.remove("border");
        const handleMediaQuery = (e) => {
            if (e.matches) {
                mainMenu.classList.remove("visible");
            };
        };
        mediaQuery.addListener(handleMediaQuery);
        handleMediaQuery(mediaQuery);
    };
};

const openGalleryItem = () => {
    const items = document.querySelectorAll(".gallery-item");
    items.forEach(item => {
        const preview = item.querySelector(".item-preview");
        const extended = item.querySelector(".item-content");
        const closer = item.querySelector(".close-btn");
        if (extended) {
            preview.style.cursor = "pointer";
            preview.addEventListener("click", () => {
                item.classList.add("grow");
                preview.gridColumn = "1 / 2";
                extended.style.display = "flex";
                closer.style.opacity = "1";
                const itemPosition = extended.getBoundingClientRect().top;
                const offsetPosition = itemPosition + window.scrollY - 176;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                });
            });
            closer.addEventListener("click", () => {
                item.classList.remove("grow");
                preview.style.gridColumn = "auto";
                extended.style.display = "none";
                closer.style.opacity = "0";
            });
        }
    });
};

const audioPlayer = () => {
    const audioComponent = document.querySelectorAll(".audio-block");
    const playBtns = document.querySelectorAll(".play-btn");
    audioComponent.forEach(component => {
        playBtns.forEach(btn => {
            if (btn.parentNode.parentNode === component) {
                const audioPlayerContainer = component.querySelector(".audio-player");
                const seekSlider = component.querySelector(".seek-slider");
                const audio = component.querySelector("audio");
                const playIcon = component.querySelector(".play-icon");
                const pauseIcon = component.querySelector(".pause-icon");
                const playerUi = component.querySelector(".audio-player-wrapper");
                const playerMarquee = component.querySelector(".audio-player-marquee");
                const volumeIcon = component.querySelector(".volume-icon");
                const muteIcon = component.querySelector(".mute-icon");
                const durationContainer = component.querySelector(".audio-duration");
                const currentTimeContainer = component.querySelector(".audio-progress");
                const volumeContainer = component.querySelector(".audio-volume");
                let raf = null;

                if (audio) {
                    btn.addEventListener("click", () => {
                        if (audio.paused) {
                            audio.play();
                            requestAnimationFrame(whilePlaying);
                        } else {
                            audio.pause();
                            cancelAnimationFrame(raf);
                        };
                        playIcon.classList.toggle("toggle-play");
                        pauseIcon.classList.toggle("toggle-play");
                        playerUi.classList.add("toggle-display");
                        playerMarquee.classList.add("toggle-display");
                    });

                    audio.addEventListener("timeupdate", () => {
                        if (audio.duration === audio.currentTime) {
                            stopAudio();
                        };
                    });

                    volumeContainer.addEventListener("click", () => {
                        controlVolume();
                    })

                    const controlVolume = () => {
                        if (audio.volume > 0) {
                            audio.volume = 0;
                            volumeIcon.classList.add("toggle-volume");
                            muteIcon.classList.add("toggle-volume");
                        } else {
                            audio.volume = 1;
                            volumeIcon.classList.remove("toggle-volume");
                            muteIcon.classList.remove("toggle-volume");
                        }
                    }

                    const stopAudio = () => {
                        audio.pause();
                        audio.currentTime = 0;
                        playIcon.classList.remove("toggle-play");
                        pauseIcon.classList.remove("toggle-play");
                        playerUi.classList.remove("toggle-display");
                        playerMarquee.classList.remove("toggle-display");
                    };

                    const showRangeProgress = (rangeInput) => {
                        audioPlayerContainer.style.setProperty("--seek-before-width", rangeInput.value / rangeInput.max * 100 + "%");
                    };

                    seekSlider.addEventListener("input", (e) => {
                        showRangeProgress(e.target);
                    });

                    const calculateTime = (sec) => {
                        let minutes = Math.floor(sec / 60);
                        let seconds = Math.floor(sec - minutes * 60);
                        if (seconds < 10) {
                            seconds = `0${seconds}`;
                        }
                        return `${minutes}:${seconds}`;
                    };

                    const displayDuration = () => {
                        durationContainer.textContent = calculateTime(audio.duration);
                    };

                    const setSliderMax = () => {
                        seekSlider.max = Math.floor(audio.duration);
                    };

                    const whilePlaying = () => {
                        seekSlider.value = Math.floor(audio.currentTime);
                        currentTimeContainer.textContent = calculateTime(seekSlider.value);
                        audioPlayerContainer.style.setProperty("--seek-before-width", `${seekSlider.value / seekSlider.max * 100}%`);
                        raf = requestAnimationFrame(whilePlaying);
                    };

                    if (audio.readyState > 0) {
                        displayDuration();
                        setSliderMax();
                    }

                    audio.addEventListener("playing", () => {
                        displayDuration();
                        setSliderMax();
                    });

                    seekSlider.addEventListener("input", () => {
                        currentTimeContainer.textContent = calculateTime(seekSlider.value);
                        if (!audio.paused) {
                            cancelAnimationFrame(raf);
                        };
                    });

                    seekSlider.addEventListener("change", () => {
                        audio.currentTime = seekSlider.value;
                        if (!audio.paused) {
                            requestAnimationFrame(whilePlaying);
                        }
                    });

                    const marquee = document.querySelectorAll(".marquee-part");
                    marquee.forEach(el => {
                        let rate = 70;
                        let distance = el.clientWidth;
                        let style = window.getComputedStyle(el);
                        let marginRight = parseInt(style.marginRight) || 0;
                        let totalDistance = distance + marginRight;
                        let time = totalDistance / rate;
                        let container = el.parentElement;
                        gsap.to(container, time, {
                            repeat: -1,
                            x: '-' + totalDistance,
                            ease: Linear.easeNone,
                        });
                    });
                };
            };
        });
    });
};

window.addEventListener("load", () => {
    history.scrollRestoration = "manual";
    documentHeight();
    toggleMenu(menuBtn, dropdownMenu, menuItems);
    openContent(slideBtn, slideContent);
    closeContent(closeBtn, slideContent);
    openGalleryItem();
    audioPlayer();
});

window.addEventListener("resize", () => {
    documentHeight();
});

window.addEventListener("scroll", () => {
    hideMenuOnScroll(dropdownMenu);
});