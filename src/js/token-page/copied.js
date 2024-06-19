export function copyText() {
    const button = document.querySelector(".address__button");
    const text = document.querySelector(".address__token").textContent;
    const notifications = document.querySelector(".address__notifications");

    button.addEventListener("click", () => {
        navigator.clipboard
            .writeText(text)
            .then(() => {
                createNotifications("Copied!");
            })
            .catch(() => {
                createNotifications("Copying error!");
            });
    });

    function createNotifications(text) {
        const border = document.createElement("div");
        border.classList.add("address__notifications-border");

        const fill = document.createElement("div");
        fill.classList.add("address__notifications-fill");

        const paragraph = document.createElement("p");
        paragraph.classList.add("address__notifications-text");
        paragraph.innerText = text;

        fill.appendChild(paragraph);
        border.appendChild(fill);
        setTimeout(() => {
            border.classList.add("address__notifications-border_active");
        }, 100);
        notifications.appendChild(border);
        const notificationsRemove = document.querySelectorAll(".address__notifications-border");
        setTimeout(() => {
            notificationsRemove.forEach((item) => {
                item.classList.remove("address__notifications-border_active");
                setTimeout(() => {
                    item.remove();
                }, 4500);
            });
        }, 4000);
    }
}
