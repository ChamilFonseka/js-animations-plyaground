document.addEventListener("DOMContentLoaded", function () {

    const tl = gsap.timeline();

    tl.from('#title', {
        scale: 0,
        duration: 2,
        ease: "bounce",
    });

    tl.from('#line', {
        x: "-100vw",
        duration: 2,
        ease: "elastic",
    }, "-=1");

    tl.from('.box', {
        y: "50vh",
        duration: 1,
        stagger: 0.2,
        ease: "back",
    }, "-=2");

    tl.to('.letter', {
        rotationY: 360,
        duration: 0.5,
        stagger: 0.5,     
    });

    tl.to('.box', {
        x: "-100vw",
        scale: 0,
        duration: 2,
        stagger: 0.1,
        repeat: 1,
        yoyo: true,
    }, '<');
});