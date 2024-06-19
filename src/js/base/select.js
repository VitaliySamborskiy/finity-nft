export const dropDown = () => {
    const selectHeader = document.querySelectorAll(".select__header");
    const selectBody = document.querySelectorAll(".select__body");
    const items = document.querySelectorAll(".select__item");
    const currentText = document.querySelectorAll(".select__current");
    const selectSvg = document.querySelectorAll(".select__svg");

    selectHeader.forEach((item, index) => {
        item.addEventListener("click", () => {
            selectBody.forEach((item) => item.classList.toggle("select__body_active"));
            selectSvg.forEach((item) => item.classList.toggle("select__svg_active"));

            selectBody.forEach((body, i) => {
                if (i !== index) body.classList.remove("select__body_active");
            });
            selectSvg.forEach((svg, i) => {
                if (i !== index) svg.classList.remove("select__svg_active");
            });
        });
    });

    items.forEach((item) => {
        item.addEventListener("click", () => {
            let text = item.innerText;
            currentText.forEach((item) => (item.innerText = text));
            selectBody.forEach((item) => item.classList.remove("select__body_active"));
            selectSvg.forEach((item) => item.classList.remove("select__svg_active"));
        });
    });
};
