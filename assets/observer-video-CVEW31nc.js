function c(){document.querySelectorAll(".faq__question-border").forEach(o=>{const a=o.querySelector(".faq__question-title-block"),e=o.querySelector(".faq__question-text"),t=o.querySelector(".faq__question-svg");a.addEventListener("click",()=>{e.classList.contains("faq__question-text_active")?(e.classList.remove("faq__question-text_active"),t.classList.remove("faq__question-svg_active")):(document.querySelectorAll(".faq__question-text").forEach(s=>{s.classList.remove("faq__question-text_active")}),document.querySelectorAll(".faq__question-svg").forEach(s=>{s.classList.remove("faq__question-svg_active")}),e.classList.add("faq__question-text_active"),t.classList.add("faq__question-svg_active"))})})}function r(){const i={rootMargin:"350px"},o=new IntersectionObserver(e=>{e.forEach(t=>{if(t.isIntersecting){const s=t.target;s.setAttribute("preload","auto"),s.play()}t.isIntersecting||t.target.pause()})},i);document.querySelectorAll("video").forEach(e=>o.observe(e))}export{c as a,r as o};
