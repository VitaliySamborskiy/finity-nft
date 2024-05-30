import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

Swiper.use([Navigation]);

export const teamShow = () => {
    const buttonClick = document.querySelector(".team__button");
    const heightBlock = document.querySelector(".team__block");
    const svgRotate = document.querySelector(".team__svg");
    buttonClick.addEventListener("click", function () {
        heightBlock.classList.toggle("team__block_active");
        svgRotate.classList.toggle("team__svg_active");
    });

    const swiperI = (breakpoint, swiperClass, swiperSettings) => {
        let swiper;
        breakpoint = window.matchMedia(breakpoint);
        const swiperInit = (className, settings) => {
            swiper = new Swiper(className, settings);
        };

        const checker = () => {
            if (breakpoint.matches) {
                return swiperInit(swiperClass, swiperSettings);
            } else {
                if (swiper !== undefined) {
                    return swiper.destroy(true, true);
                }
            }
        };

        breakpoint.addEventListener("change", checker);
        checker();
    };

    swiperI("(max-width: 1280px)", ".swiper", {
        slidesPerView: "auto",
        loop: true,
        wrapperClass: "team__block",
        navigation: {
            nextEl: ".team__button-next",
            prevEl: ".team__button-prev",
        },
    });
};
