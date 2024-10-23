var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursorBlur");
document.addEventListener("mousemove", function(dets) {
crsr.style.left = dets.pageX + "px";
crsr.style.top = dets.pageY + "px";
blur.style.left = dets.pageX + "px";
blur.style.top = dets.pageY + "px";
});

document.querySelector("#page1 #arrow").addEventListener("click", function() {
    document.querySelector("#footer").scrollIntoView({
        behavior: "smooth"
    });
});


var h4all = document.querySelectorAll("#nav h4, #nav img, #nav.black-bg h4, .icon i, .elem, #f2 h3, #f3 h3, #f4 h3,#page1 #arrow, .card");

h4all.forEach(function(elem) {
    elem.addEventListener("mouseenter", function() {
        gsap.to(crsr, {
            scale: 4.5,
            border: "1px solid white",
            backgroundColor: "transparent",
            duration: 0.3,
            ease: "power2.out"
        });
    });
    
    elem.addEventListener("mouseleave", function() {
        gsap.to(crsr, {
            scale: 1,
            border: "0px solid #95C11E",
            backgroundColor: "#95C11E",
            duration: 0.3,
            ease: "power2.out"
        });
    });
});

gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
    onUpdate: (self) => {
        if (self.progress > 0) {
        document.querySelector("#nav").classList.add("black-bg");
        } else {
        document.querySelector("#nav").classList.remove("black-bg");
        }
    },
    },
});

gsap.to("#main", {
backgroundColor: "#000",
scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
},
});

gsap.from("#about-us img,#about-us-in", {
y: 90,
opacity: 0,
duration: 1,
scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
},
});

gsap.from(".card", {
scale: 0.8,
  // opacity:0,
duration: 1,
stagger: 0.1,
scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers:false,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
},
});

gsap.from("#colon1", {
y: -70,
x: -70,
scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
},
});

gsap.from("#colon2", {
y: 70,
x: 70,
scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
},
});

gsap.from("#page4 h1", {
y: 50,
scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
},
});

