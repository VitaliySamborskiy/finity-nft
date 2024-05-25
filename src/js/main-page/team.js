import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";

Swiper.use([Navigation]);

// export const teamShow = () => {
//     const buttonClick = document.querySelector(".team__button");
//     const heightBlock = document.querySelector(".team__block");
//     const svgRotate = document.querySelector(".team__svg");
//     const removeClass = document.querySelector(".toggle-class");
//     let swiperInstance = null;
//
//     const initializeSwiper = () => {
//         if (!swiperInstance) {
//             swiperInstance = new Swiper(".swiper", {
//                 slidesPerView: "auto",
//                 loop: true,
//                 navigation: {
//                     nextEl: ".team__button-next",
//                     prevEl: ".team__button-prev",
//                 },
//             });
//         }
//     };
//
//     const destroySwiper = () => {
//         if (swiperInstance) {
//             swiperInstance.destroy(true, true);
//             swiperInstance = null;
//         }
//     };
//
//     const handleResize = () => {
//         if (window.matchMedia("(max-width: 1280px)").matches) {
//             if (removeClass.classList.contains("team__block")) {
//                 removeClass.classList.remove("team__block");
//             }
//             if (!removeClass.classList.contains("swiper-wrapper")) {
//                 removeClass.classList.add("swiper-wrapper");
//             }
//             initializeSwiper();
//         } else {
//             if (!removeClass.classList.contains("team__block")) {
//                 removeClass.classList.add("team__block");
//             }
//             if (removeClass.classList.contains("swiper-wrapper")) {
//                 removeClass.classList.remove("swiper-wrapper");
//             }
//             destroySwiper();
//         }
//
//         buttonClick.addEventListener("click", function () {
//             removeClass.classList.add("team__block");
//             heightBlock.classList.toggle("team__block_active");
//             svgRotate.classList.toggle("team__svg_active");
//         });
//     };
//
//     handleResize();
//     window.addEventListener("resize", handleResize);
// };

// export const teamShow = () => {
//     let swiper;
//     swiper = new Swiper(".swiper", {
//         init: false,
//         slidesPerView: "auto",
//         loop: true,
//         navigation: {
//             nextEl: ".team__button-next",
//             prevEl: ".team__button-prev",
//         },
//     });
//
//     const resizeObserver = () => {
//         if (window.matchMedia("(max-width: 1280px)").matches) {
//             return swiper.enable();
//         } else {
//             if (swiper !== undefined) {
//                 swiper.destroy(true, true);
//                 return swiper;
//             }
//         }
//     };
//
//     resizeObserver();
//     window.addEventListener("resize", resizeObserver);
// };
//
// const buttonClick = document.querySelector(".team__button");
// const heightBlock = document.querySelector(".team__block");
// const svgRotate = document.querySelector(".team__svg");
// buttonClick.addEventListener("click", function () {
//     heightBlock.classList.toggle("team__block_active");
//     svgRotate.classList.toggle("team__svg_active");
// });

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
