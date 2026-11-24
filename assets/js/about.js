document.documentElement.classList.add("js");
var rm=matchMedia("(prefers-reduced-motion:reduce)").matches;

document.getElementById("chips").innerHTML=["Adobe InDesign","Illustrator","Photoshop","WordPress","Elementor","Google Analytics","Meta Ads","TikTok"].map(function(x){return"<span class='tool'>"+x+"</span>"}).join("");
var F=["I once rewrote a headline 47 times. The first version won.","I can’t walk past a billboard without critiquing the kerning.","My favorite brief is the one that starts with “we’re not sure what we want.”","I’ve never met a spreadsheet I couldn’t make prettier.","I read the comments so you don’t have to.","If it doesn’t fit on a sticky note, it’s not a strategy yet."];
var P={1:[5],2:[1,9],3:[1,5,9],4:[1,3,7,9],5:[1,3,5,7,9],6:[1,3,4,6,7,9]},T={1:[0,0],6:[0,180],2:[0,-90],5:[0,90],3:[-90,0],4:[90,0]};
var pips=document.getElementById("pips"),dice=document.getElementById("dice"),fe=document.getElementById("fact"),hint=document.getElementById("hint"),cur=0,busy=false;
function show(n){pips.innerHTML=P[n].map(function(p){return'<i class="pip" style="grid-row:'+Math.ceil(p/3)+';grid-column:'+((p-1)%3+1)+'"></i>'}).join("")}
function pick(){var n;do{n=1+Math.floor(Math.random()*6)}while(n===cur);return n}
cur=pick();show(cur);fe.textContent=F[cur-1];
dice.onclick=function(){if(busy)return;busy=true;var n=pick();hint.textContent="Rolling…";dice.classList.add("rolling");fe.classList.add("out");var tick=rm?null:setInterval(function(){show(1+Math.floor(Math.random()*6))},90);
setTimeout(function(){if(tick)clearInterval(tick);cur=n;show(n);fe.textContent=F[n-1];fe.classList.remove("out");hint.textContent="You rolled a "+n+". Click to roll again";dice.classList.remove("rolling");busy=false},rm?0:1300)};
document.querySelectorAll(".jh").forEach(function(b){b.onclick=function(){var o=b.parentNode.classList.toggle("open");b.setAttribute("aria-expanded",o)}});
function fitBig(){document.querySelectorAll(".big").forEach(function(b){var s=b.firstElementChild;if(!s)return;s.style.fontSize="100px";var w=b.clientWidth-48,sw=s.getBoundingClientRect().width;if(sw>0)s.style.fontSize=(100*w/sw)+"px"})}
addEventListener("resize",fitBig);addEventListener("load",fitBig);if(document.fonts&&document.fonts.ready)document.fonts.ready.then(fitBig);fitBig();
var lenis=null;if(window.Lenis&&!rm){lenis=new Lenis({lerp:.085});(function r(t){lenis.raf(t);requestAnimationFrame(r)})(performance.now())}
document.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest('a[href^="#"]');if(!a||a.getAttribute("href").length<2)return;var el=document.querySelector(a.getAttribute("href"));if(!el)return;e.preventDefault();if(lenis)lenis.scrollTo(el,{offset:-64});else el.scrollIntoView({behavior:"smooth"})});
(function(){if(!matchMedia("(hover:hover) and (pointer:fine)").matches)return;var d=document.getElementById("dot"),x=0,y=0,cx2=0,cy2=0,vis=false;document.documentElement.classList.add("has-dot");
addEventListener("pointermove",function(e){x=e.clientX;y=e.clientY;if(!vis){vis=true;cx2=x;cy2=y}var t=e.target.closest?e.target.closest("a,button,.pc,.tool,.pic,label,input,textarea,select"):null,f=t&&t.closest("input:not([type=radio]),textarea,select");d.classList.toggle("hov",!!t&&!f);d.classList.toggle("hand",!!(e.target.closest&&e.target.closest(".pic,.case")));d.style.opacity=f?0:1});
document.documentElement.addEventListener("mouseleave",function(){d.style.opacity=0});
(function loop(){cx2+=(x-cx2)*(rm?1:.28);cy2+=(y-cy2)*(rm?1:.28);d.style.transform="translate3d("+cx2+"px,"+cy2+"px,0)";requestAnimationFrame(loop)})()})();

(function(){var w=document.getElementById("rw"),L=["coffee snob.","kerning critic.","professional overthinker.","road-trip playlist curator.","sticky-note hoarder.","marketer, too."],i=0;if(!w||rm)return;setInterval(function(){w.classList.add("out");setTimeout(function(){i=(i+1)%L.length;w.textContent=L[i];w.classList.remove("out")},300)},2400)})();

(function(){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("on");io.unobserve(e.target)}})},{threshold:.25});document.querySelectorAll(".rv").forEach(function(el){io.observe(el)})})();

(function(){var z=10,tip=document.getElementById("tip");document.querySelectorAll(".pic").forEach(function(p){var sx=0,sy=0,ox=0,oy=0,on=false;
p.addEventListener("pointerdown",function(e){on=true;sx=e.clientX;sy=e.clientY;p.classList.add("drag");p.style.setProperty("--z",++z);try{p.setPointerCapture(e.pointerId)}catch(_){}if(tip)tip.classList.add("off")});
p.addEventListener("pointermove",function(e){if(!on)return;p.style.setProperty("--dx",(ox+e.clientX-sx)+"px");p.style.setProperty("--dy",(oy+e.clientY-sy)+"px")});
function up(e){if(!on)return;on=false;ox+=e.clientX-sx;oy+=e.clientY-sy;p.classList.remove("drag")}
p.addEventListener("pointerup",up);p.addEventListener("pointercancel",up)})})();

(function(){var b=document.querySelector(".burger"),n=document.querySelector("header nav");if(!b||!n)return;n.id="mnav";function set(o){n.classList.toggle("open",o);b.setAttribute("aria-expanded",o);b.setAttribute("aria-label",o?"Close menu":"Open menu");document.documentElement.classList.toggle("menu-open",o);if(window.lenis){if(o)lenis.stop();else lenis.start()}}
b.onclick=function(){set(!n.classList.contains("open"))};n.addEventListener("click",function(e){if(e.target.closest("a"))set(false)});addEventListener("keydown",function(e){if(e.key==="Escape")set(false)});addEventListener("resize",function(){if(innerWidth>820)set(false)})})();
