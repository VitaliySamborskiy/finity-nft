import{b as _,d as l}from"./select-DqCnpfuw.js";import{a as m,o as u}from"./observer-video-FFJaoD2G.js";function f(){function n(r,c,i){const s=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&t.target.classList.add(r)})},c);document.querySelectorAll(i).forEach(e=>s.observe(e))}n("tokenomic__hidden_active",{margin:10},".tokenomic__hidden"),n("tokenomic__chart-text-block_active",{margin:20},".tokenomic__chart-text-block")}function b(){const n=document.querySelector(".address__button"),r=document.querySelector(".address__token").textContent,c=document.querySelector(".address__notifications");n.addEventListener("click",()=>{navigator.clipboard.writeText(r).then(()=>{i("Copied!")}).catch(()=>{i("Copying error!")})});function i(s){const o=document.createElement("div");o.classList.add("address__notifications-border");const e=document.createElement("div");e.classList.add("address__notifications-fill");const t=document.createElement("p");t.classList.add("address__notifications-text"),t.innerText=s,e.appendChild(t),o.appendChild(e),setTimeout(()=>{o.classList.add("address__notifications-border_active")},100),c.appendChild(o);const d=document.querySelectorAll(".address__notifications-border");setTimeout(()=>{d.forEach(a=>{a.classList.remove("address__notifications-border_active"),setTimeout(()=>{a.remove()},4500)})},4e3)}}document.addEventListener("DOMContentLoaded",async function(){_(),m(),u(),f(),b(),l()});