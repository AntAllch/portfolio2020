// const tl = gsap.timeline({defaults: {ease: "power1.out"}});
const tl = new gsap.timeline({defaults: {ease: "power2.out"} });


//Header animations
tl.fromTo(".header-container", {opacity: 0}, {opacity: 1, duration: 1, stagger: 0.25});
tl.fromTo(".load", {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 1, stagger: 0.1}, "-=0.65");