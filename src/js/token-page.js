import { burgerFunction } from "@jsBase/header.js";
import { acardion } from "@jsBase/faq-section.js";
import { observerVideo } from "@jsBase/observer-video.js";
import { observerTokenomic } from "@jsToken/observer-tokenomic.js";
import { copyText } from "@jsToken/copied.js";
import { dropDown } from "@jsBase/select.js";

document.addEventListener("DOMContentLoaded", function () {
    burgerFunction();
    acardion();
    observerVideo();
    observerTokenomic();
    copyText();
    dropDown();
});
