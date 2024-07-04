import { burgerFunction } from "@jsBase/header.js";
import { teamShow } from "@jsMain/team.js";
import { acardion } from "@jsBase/faq-section.js";
import { observerVideo } from "@jsBase/observer-video.js";
import { dropDown } from "@jsBase/select.js";

document.addEventListener("DOMContentLoaded", function () {
    burgerFunction();
    teamShow();
    acardion();
    observerVideo();
    dropDown();
});
