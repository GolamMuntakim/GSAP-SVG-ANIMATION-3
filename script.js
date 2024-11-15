var initialPath =  `M 10 100 Q 950 100 1900 100`;
var finalPath = `M 10 100 Q 950 100 1900 100`;
var string = document.querySelector("#main");

string.addEventListener("mousemove", function(dets){
    path = `M 10 100 Q ${dets.x} ${dets.y} 1900 100`;
    gsap.to("svg path", {
        attr:{d:path},
        duration:0.2,
        ease:"power3.out"
    })

}) 
string.addEventListener("mouseleave", function(){
    gsap.to("svg path", {
        attr:{d:finalPath},
        duration : 1.5,
        ease:"elastic.out(1,0.2)"
    })
})
