export function observerTokenomic() {
    function observerInfo(addClass, options, targetClass) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    console.log(entry);
                    entry.target.classList.add(addClass);
                }
            });
        }, options);

        const target = document.querySelectorAll(targetClass);
        target.forEach((target) => observer.observe(target));
    }

    observerInfo("tokenomic__hidden_active", { margin: 10 }, ".tokenomic__hidden");
    observerInfo(
        "tokenomic__chart-text-block_active",
        { margin: 20 },
        ".tokenomic__chart-text-block",
    );
}
