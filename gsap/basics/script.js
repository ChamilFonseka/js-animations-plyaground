document.addEventListener("DOMContentLoaded", function () {
    gsap.to(".to", {
        x: "100vw",
        xPercent: -100,
        duration: 5,
        ease: "bounce.out",
    });

    gsap.from(".from", {
        x: "100vw",
        xPercent: -100,
        duration: 5,
        ease: "bounce.out",
    });

    gsap.fromTo(".fromTo", {
        x: "-100vw",
    }, {
        x: "100vw",
        xPercent: -100,
        duration: 5,
        ease: "bounce.out",
    });
});