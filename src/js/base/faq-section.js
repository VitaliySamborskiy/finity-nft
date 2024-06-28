export function acardion() {
    const accordions = document.querySelectorAll(".faq__question-border");
    accordions.forEach((accordion) => {
        const title = accordion.querySelector(".faq__question-title-block");
        const text = accordion.querySelector(".faq__question-text");
        const svg = accordion.querySelector(".faq__question-svg");

        title.addEventListener("click", () => {
            if (text.classList.contains("faq__question-text_active")) {
                text.classList.remove("faq__question-text_active");
                svg.classList.remove("faq__question-svg_active");
            } else {
                document.querySelectorAll(".faq__question-text").forEach((el) => {
                    el.classList.remove("faq__question-text_active");
                });

                document.querySelectorAll(".faq__question-svg").forEach((el) => {
                    el.classList.remove("faq__question-svg_active");
                });
                text.classList.add("faq__question-text_active");
                svg.classList.add("faq__question-svg_active");
            }
        });
    });
}
