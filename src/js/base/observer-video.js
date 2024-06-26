export function observerVideo() {
    const options = {
        rootMargin: "350px",
    };
    const observer = new IntersectionObserver((autoplay) => {
        autoplay.forEach((entry) => {
            if (entry.isIntersecting) {
                const video = entry.target;
                video.setAttribute("preload", "auto");
                video.play();
            }
            if (!entry.isIntersecting) {
                const video = entry.target;
                video.pause();
            }
        });
    }, options);

    const target = document.querySelectorAll("video");
    target.forEach((t) => observer.observe(t));
}
