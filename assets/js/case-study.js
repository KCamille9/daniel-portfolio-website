if(window.Lenis&&!matchMedia("(prefers-reduced-motion:reduce)").matches){var lenis=new Lenis({lerp:.085});(function r(t){lenis.raf(t);requestAnimationFrame(r)})(performance.now())}
(function(){if(!matchMedia("(hover:hover) and (pointer:fine)").matches)return;var d=document.getElementById("dot"),x=0,y=0,cx=0,cy=0,vis=false,rm=matchMedia("(prefers-reduced-motion:reduce)").matches;document.documentElement.classList.add("has-dot");
addEventListener("pointermove",function(e){x=e.clientX;y=e.clientY;if(!vis){vis=true;cx=x;cy=y}var t=e.target.closest?e.target.closest("a"):null;d.classList.toggle("hov",!!t);d.style.opacity=1});
document.documentElement.addEventListener("mouseleave",function(){d.style.opacity=0});
(function loop(){cx+=(x-cx)*(rm?1:.28);cy+=(y-cy)*(rm?1:.28);d.style.transform="translate3d("+cx+"px,"+cy+"px,0)";requestAnimationFrame(loop)})()})();

(function(){var b=document.querySelector(".burger"),n=document.querySelector("header nav");if(!b||!n)return;n.id="mnav";function set(o){n.classList.toggle("open",o);b.setAttribute("aria-expanded",o);b.setAttribute("aria-label",o?"Close menu":"Open menu");document.documentElement.classList.toggle("menu-open",o);if(window.lenis){if(o)lenis.stop();else lenis.start()}}
b.onclick=function(){set(!n.classList.contains("open"))};n.addEventListener("click",function(e){if(e.target.closest("a"))set(false)});addEventListener("keydown",function(e){if(e.key==="Escape")set(false)});addEventListener("resize",function(){if(innerWidth>820)set(false)})})();
