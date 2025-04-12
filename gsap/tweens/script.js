document.addEventListener("DOMContentLoaded", function () {

    const animationWidth = window.innerWidth - 145;

    gsap.to(".to", {
        x: animationWidth,
        duration: 5,
        ease: "bounce.out",
    });

    gsap.from(".from", {
        x: animationWidth,
        duration: 5,
        ease: "bounce.out",
    });

    gsap.fromTo(".fromTo", {
       x: -animationWidth,
    }, {
        x: animationWidth,
        duration: 5,
        ease: "bounce.out",
    });
});