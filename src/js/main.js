import { burgerFunction } from "./base/header.js";
import { teamShow } from "./main-page/team.js";
import { acardion } from "./base/faq-section.js";

document.addEventListener("DOMContentLoaded", async function () {
    burgerFunction();
    teamShow();
    acardion();
});
