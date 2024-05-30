import { burgerFunction} from "./base/header.js";
import {acardion} from "./base/faq-section.js";
import { observerVideo} from "./base/observer-video.js";

document.addEventListener( "DOMContentLoaded", async function () {
    burgerFunction();
    acardion();
    observerVideo();
})