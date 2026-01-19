fetch("menu.html")
.then(r=>r.text())
.then(d=>document.getElementById("menu").innerHTML=d);

gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray("section").forEach(sec=>{
gsap.from(sec,{
opacity:0,y:80,duration:1,
scrollTrigger:{trigger:sec,start:"top 80%"}
});
});
