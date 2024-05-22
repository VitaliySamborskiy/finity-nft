export function acardion() {
    document.querySelectorAll(".faq__question-border").forEach((el) => {
        el.addEventListener("click", () => {
            const fill = el.querySelector(".faq__question-text");
            const svg = el.querySelector(".faq__question-svg");
            if (fill.classList.contains("faq__question-text_active")) {
                fill.classList.remove("faq__question-text_active");
                svg.classList.remove("faq__question-svg_active");
            } else {
                document.querySelectorAll(".faq__question-text").forEach((fill) => {
                    fill.classList.remove("faq__question-text_active");
                });
                document.querySelectorAll(".faq__question-svg").forEach((svgRemove) => {
                    svgRemove.classList.remove("faq__question-svg_active");
                });
                fill.classList.add("faq__question-text_active");
                svg.classList.add("faq__question-svg_active");
            }
        });
    });
}
