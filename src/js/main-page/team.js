import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

Swiper.use([Navigation]);

export const teamShow = () => {
    const buttonClick = document.querySelector(".team__button");
    const heightBlock = document.querySelector(".team__block");
    const svgRotate = document.querySelector(".team__svg");
    const removeClass = document.querySelector(".toggle-class");
    let swiperInstance = null;

    const initializeSwiper = () => {
        if (!swiperInstance) {
            swiperInstance = new Swiper(".swiper", {
                slidesPerView: "auto",
                loop: true,
                navigation: {
                    nextEl: ".team__button-next",
                    prevEl: ".team__button-prev",
                },
            });
        }
    };

    const destroySwiper = () => {
        if (swiperInstance) {
            swiperInstance.destroy(true, true);
            swiperInstance = null;
        }
    };

    const handleResize = () => {
        if (window.matchMedia("(max-width: 1280px)").matches) {
            if (removeClass.classList.contains("team__block")) {
                removeClass.classList.remove("team__block");
            }
            if (!removeClass.classList.contains("swiper-wrapper")) {
                removeClass.classList.add("swiper-wrapper");
            }
            initializeSwiper();
        } else {
            if (!removeClass.classList.contains("team__block")) {
                removeClass.classList.add("team__block");
                // if (!removeClass.classList.contains("team__block_active")) {
                //     heightBlock.classList.remove("team__block_active");
                // } else {
                //     heightBlock.classList.add("team__block_active");
                // }
            }
            if (removeClass.classList.contains("swiper-wrapper")) {
                removeClass.classList.remove("swiper-wrapper");
            }
            destroySwiper();
        }

        buttonClick.addEventListener("click", function () {
            removeClass.classList.add("team__block");
            heightBlock.classList.toggle("team__block_active");
            svgRotate.classList.toggle("team__svg_active");
        });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
};
