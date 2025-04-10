document.addEventListener("DOMContentLoaded", function () {

    gsap.to(".rotates-x", {
        rotationX: 360,
        duration: 2,
        ease: "linear",
        repeat: -1,
    });

    gsap.to(".rotates-y", {
        rotationY: 360,
        duration: 2,
        ease: "linear",
        repeat: -1,
    });

    gsap.to(".rotates-z", {
        rotation: 360,
        duration: 2,
        ease: "linear",
        repeat: -1,
    });

    let currentRotation = 0;
    const rotateNext = () => {
        currentRotation += 45;
        gsap.to(".rotates-z-steps", {
            rotation: currentRotation,
            duration: 2,
            ease: "bounce.out",
            onComplete: function() {
                requestAnimationFrame(rotateNext);
            }
        });
    };
    rotateNext();
});