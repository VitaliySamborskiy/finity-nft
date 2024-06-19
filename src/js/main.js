import { burgerFunction } from "./base/header.js";
import { teamShow } from "./main-page/team.js";
import { acardion } from "./base/faq-section.js";
import { observerVideo } from "./base/observer-video.js";
import { dropDown } from "./base/select.js";

document.addEventListener("DOMContentLoaded", async function () {
    burgerFunction();
    teamShow();
    acardion();
    observerVideo();
    dropDown();
});
