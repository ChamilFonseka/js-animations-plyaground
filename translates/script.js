document.addEventListener("DOMContentLoaded", function () {

    gsap.to(".translates-x", {
        x: 100,
        duration: 1,
        ease: "linear",
        yoyo: true,
        repeat: -1,
    });

    gsap.to(".translates-y", {
        y: 100,
        duration: 1,
        ease: "linear",
        yoyo: true,
        repeat: -1,
    });

    gsap.to(".translates-xy", {
        x: 100,
        y: 100,
        duration: 1,
        ease: "linear",
        yoyo: true,
        repeat: -1,
    });
});