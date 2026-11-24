var skills=[["Social Media Strategy","Channel plans and content systems built around the audience you actually want to reach.","Instagram","Paid Ads","TikTok"],["Competitive Analysis","See where rivals win, where they stall, and where your brand can take open ground.","Positioning","Share of voice","Gap mapping"],["Brand Identity","A voice and visual system that makes every touchpoint look and sound like you.","Voice","Visual systems","Guidelines"],["Copywriting","Sharp, punchy copy for ads, pages and emails that gets read and acted on.","Ads","Landing pages","Email"],["Content Strategy","Editorial plans that turn one idea into a steady, measurable stream of content.","Editorial plans","SEO","Short-form"],["Market Research","Audience and trend research that replaces guesswork with decisions.","Surveys","Interviews","Audience maps"]];
var g=document.getElementById("grid");
skills.forEach(function(s,i){var d=document.createElement("article");d.className="scard";d.style.setProperty("--i",i);
d.innerHTML="<div class='sp'><img src='assets/images/chat_transparent.gif' alt=''></div><div class='sc'><h3>"+s[0]+"</h3><p>"+s[1]+"</p><ul>"+s.slice(2).map(function(x){return"<li>"+x+"</li>"}).join("")+"</ul><a class='btn' href='#contact'>Let’s chat</a></div>";g.appendChild(d)});
var hero=document.getElementById("about"),dp=hero.querySelector(".dp");
function move(e){if(e.pointerType==="touch")return;var r=hero.getBoundingClientRect();if(e.clientY<r.top||e.clientY>r.bottom){dp.style.setProperty("--mx","-999px");dp.style.setProperty("--my","-999px");return}dp.style.setProperty("--mx",(e.clientX-r.left)+"px");dp.style.setProperty("--my",(e.clientY-r.top)+"px")}
window.addEventListener("pointermove",move);window.addEventListener("mousemove",move);
var c=document.getElementById("cases");
for(var i=0;i<5;i++){c.insertAdjacentHTML("beforeend","<article class='case'><span class='cl'>illy</span><h3>From awareness to conversion on Amazon.</h3><p>Driving market share growth for illy with an Amazon-first marketing plan.</p><a class='vc' href='case-study.html'>View case <svg viewBox='0 0 56 24' fill='none' stroke='currentColor' stroke-width='1.3'><path d='M0 12h54M44 2l10 10-10 10'/></svg></a></article>")}

var el=document.querySelector('.ef.l'),er=document.querySelector('.ef.r');function ef(){el.style.opacity=c.scrollLeft>8?1:0;er.style.opacity=c.scrollLeft+c.clientWidth<c.scrollWidth-8?1:0}c.addEventListener('scroll',ef);window.addEventListener('resize',ef);ef();
var tr=document.getElementById("dirtrack");Array.prototype.slice.call(tr.children).forEach(function(c){var n=c.cloneNode(true);n.setAttribute("aria-hidden","true");tr.appendChild(n)});
var T=[["“Marcus bypassed the standard strategy presentations and went straight to fixing our lead pipeline. Within 60 days, acquisition costs fell 40% while volume spiked.”","Camille Alvarado · Web & UX Designer, Platform Accounting Group"]],k=0;
function show(){document.getElementById("q").textContent=T[k][0];document.getElementById("who").textContent=T[k][1]}
show();

var lenis=null;if(window.Lenis&&!matchMedia("(prefers-reduced-motion:reduce)").matches){lenis=new Lenis({lerp:.085});(function r(t){lenis.raf(t);requestAnimationFrame(r)})(performance.now());document.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest('a[href^="#"]');if(!a||a.getAttribute("href").length<2)return;var el=document.querySelector(a.getAttribute("href"));if(!el)return;e.preventDefault();lenis.scrollTo(el,{offset:-64})})}
(function(){if(!matchMedia("(hover:hover) and (pointer:fine)").matches)return;var d=document.getElementById("dot"),x=0,y=0,cx=0,cy=0,vis=false,rm=matchMedia("(prefers-reduced-motion:reduce)").matches;document.documentElement.classList.add("has-dot");
addEventListener("pointermove",function(e){x=e.clientX;y=e.clientY;if(!vis){vis=true;cx=x;cy=y}var t=e.target.closest?e.target.closest("a,button,.case,label,input,textarea,select"):null,f=t&&t.closest("input:not([type=radio]),textarea,select");d.classList.toggle("hov",!!t&&!f);d.classList.toggle("hand",!!(e.target.closest&&e.target.closest(".pic,.case")));d.style.opacity=f?0:1});
document.documentElement.addEventListener("mouseleave",function(){d.style.opacity=0});
(function loop(){cx+=(x-cx)*(rm?1:.28);cy+=(y-cy)*(rm?1:.28);d.style.transform="translate3d("+cx+"px,"+cy+"px,0)";requestAnimationFrame(loop)})()})();

(function(){var w=document.getElementById("work"),p=w.querySelector(".pin"),c=document.getElementById("cases");if(matchMedia("(prefers-reduced-motion:reduce)").matches)return;w.classList.add("pinned");var max=0;
function upd(){var y=-w.getBoundingClientRect().top;c.scrollLeft=max?Math.min(1,Math.max(0,y/max))*max:0}
function size(){max=Math.max(0,c.scrollWidth-c.clientWidth);w.style.height=(p.offsetHeight+max)+"px";upd()}
addEventListener("scroll",upd,{passive:true});addEventListener("resize",size);addEventListener("load",size);size();setTimeout(size,500)})();
function fitBig(){document.querySelectorAll(".big").forEach(function(b){var s=b.firstElementChild;if(!s)return;s.style.fontSize="100px";var w=b.clientWidth-48,sw=s.getBoundingClientRect().width;if(sw>0)s.style.fontSize=(100*w/sw)+"px"})}
addEventListener("resize",fitBig);addEventListener("load",fitBig);if(document.fonts&&document.fonts.ready)document.fonts.ready.then(fitBig);fitBig();

(function(){var L=document.getElementById("loader");if(!L)return;var seen=false;try{seen=sessionStorage.getItem("ld")==="1"}catch(_){}
if(seen){L.remove();return}
var H=document.documentElement,n=document.getElementById("ldn"),b=document.getElementById("ldb"),r=matchMedia("(prefers-reduced-motion:reduce)").matches,dur=r?600:2600,t0=performance.now();H.classList.add("loading");
function f(t){var p=Math.min(1,(t-t0)/dur),q=1-Math.pow(1-p,2.2);n.textContent=String(Math.round(q*100)).padStart(3,"0");b.style.transform="scaleX("+q+")";
if(p<1){requestAnimationFrame(f);return}
setTimeout(function(){L.classList.add("done");H.classList.remove("loading");try{sessionStorage.setItem("ld","1")}catch(_){}setTimeout(function(){L.remove()},1000)},250)}
requestAnimationFrame(f)})();

(function(){var b=document.querySelector(".burger"),n=document.querySelector("header nav");if(!b||!n)return;n.id="mnav";function set(o){n.classList.toggle("open",o);b.setAttribute("aria-expanded",o);b.setAttribute("aria-label",o?"Close menu":"Open menu");document.documentElement.classList.toggle("menu-open",o);if(window.lenis){if(o)lenis.stop();else lenis.start()}}
b.onclick=function(){set(!n.classList.contains("open"))};n.addEventListener("click",function(e){if(e.target.closest("a"))set(false)});addEventListener("keydown",function(e){if(e.key==="Escape")set(false)});addEventListener("resize",function(){if(innerWidth>820)set(false)})})();
