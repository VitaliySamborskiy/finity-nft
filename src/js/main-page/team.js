import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

Swiper.use([Navigation]);

export const teamShow = () => {
    const buttonClick = document.querySelector(".team__button");
    const heightBlock = document.querySelector(".team__block");
    const svgRotate = document.querySelector(".team__svg");
    const breakpoint = window.matchMedia("(max-width: 1280px)");

    buttonClick.addEventListener("click", function () {
        heightBlock.classList.toggle("team__block_active");
        svgRotate.classList.toggle("team__svg_active");
    });

    const removeActive = () => {
        if (breakpoint.matches) {
            heightBlock.classList.remove("team__block_active");
            svgRotate.classList.remove("team__svg_active");
        }
    };

    const swiperInit = () => {
        let swiper;
        if (breakpoint.matches) {
            return (swiper = new Swiper(".swiper", {
                slidesPerView: "auto",
                loop: true,
                wrapperClass: "team__block",
                navigation: {
                    nextEl: ".team__button-next",
                    prevEl: ".team__button-prev",
                },
            }));
        }
        if (swiper) {
            return swiper.destroy(true, true);
        }
    };

    breakpoint.addEventListener("change", swiperInit);
    swiperInit();
    breakpoint.addEventListener("change", removeActive);
    removeActive();
};
