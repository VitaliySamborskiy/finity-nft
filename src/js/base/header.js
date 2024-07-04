import { disablePageScroll, enablePageScroll } from "scroll-lock";

export function burgerFunction() {
    const burger = document.querySelector(".burger__icon");
    const burgerBackground = document.querySelector(".burger__background");
    const scrollableElement = document.querySelector(".burger__scroll");

    burger.addEventListener("click", function () {
        if (burger.classList.contains("burger__icon_active")) {
            burger.classList.remove("burger__icon_active");
            enablePageScroll(scrollableElement);
        } else {
            burger.classList.add("burger__icon_active");
            disablePageScroll(scrollableElement);
        }
        burgerBackground.classList.toggle("burger__background_active");
    });
}
