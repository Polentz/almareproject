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

const openGalleryItem = () => {
    const items = document.querySelectorAll(".gallery-item");
    items.forEach(item => {
        const preview = item.querySelector(".item-preview");
        const extended = item.querySelector(".item-content");
        const closer = item.querySelector(".close-btn");
        preview.addEventListener("click", () => {
            item.style.gridColumn = "1 / 4";
            item.style.display = "grid";
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
            item.style.gridColumn = "auto";
            item.style.display = "block";
            preview.style.gridColumn = "auto";
            extended.style.display = "none";
            closer.style.opacity = "0";
        });
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
    // history.scrollRestoration = "manual";
    documentHeight();
    // openContent(slideBtn, slideContent);
    // closeContent(closeBtn, slideContent);
    toggleMenu(menuBtn, dropdownMenu);
    // toggleMenu(mobileBtn, mobileMenu);
    openGalleryItem();
    audioPlayer();
});

window.addEventListener("resize", () => {
    documentHeight();
});