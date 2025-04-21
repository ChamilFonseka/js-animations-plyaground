document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    //-------------------------------------------------
    gsap.to(".without-scrub-section .box", {
        scrollTrigger: {
            trigger: ".without-scrub-section .box",
            start: "top center",
            end: "+=200",
            toggleActions: "restart pause reverse pause",
            markers: true,
        },
        x: window.innerWidth / 2,
        rotation: 360,
        duration: 2,
    });
    //-------------------------------------------------

    //-------------------------------------------------
    const withScrub = gsap.to(".with-scrub-section .box", {
        x: window.innerWidth / 2,
        rotation: 360,
    });
    ScrollTrigger.create({
        animation: withScrub,
        trigger: ".with-scrub-section .box",
        start: "top center",
        end: "+=200",
        scrub: true,
        markers: true,
    });
    //-------------------------------------------------

    //-------------------------------------------------
    gsap.to(".with-pin-section .box", {
        scrollTrigger: {
            trigger: ".with-pin-section .box",
            start: "top center",
            end: "+=200",
            scrub: true,
            pin: true,
            markers: true,
        },
        x: window.innerWidth / 2,
        rotation: 360,
    });
    //-------------------------------------------------

    //-------------------------------------------------
    const tl = gsap.timeline()
        .from(".l-to-r", { xPercent: -100 })
        .from(".b-to-t", { yPercent: 100 })
        .from(".r-to-l", { xPercent: 100 });

    ScrollTrigger.create({
        animation: tl,
        trigger: ".panel-container",
        start: "top top",
        scrub: true,
        pin: true,
        markers: true,
    });
    //-------------------------------------------------

    //-------------------------------------------------
    gsap.utils.toArray(".pin").forEach((section) => {
        ScrollTrigger.create({
            trigger: section,
            start: "top top",
            pin: true,
            pinSpacing: false,
        });
    });
    //-------------------------------------------------

    //-------------------------------------------------
    const sections = gsap.utils.toArray(".snap-panel");
    gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: "#snap-section",
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            end: () => "+=" + document.querySelector("#snap-section").offsetWidth,
        },
    });
    //-------------------------------------------------
    


    //-------------------------------------------------
    const cardTL = gsap.timeline();
    const cards = gsap.utils.toArray(".card")
    cards.forEach((card, i) => {
        gsap.set(card, { rotation: -i * 10, x: -10 * i, y: 20 * i , zIndex: cards.length - i });

        cardTL.to(card, { x: 100, y: '-100vh', opacity: 0});
        cardTL.to("#card-container", { rotation: (i + 1) * 10, x: 10 * (i + 1), y: -20 * (i + 1) }, "<");
    });

        ScrollTrigger.create({
        animation: cardTL,
        trigger: "#cards-section",
        start: "top top",
        scrub: true,
        pin: true,
    });
    //-------------------------------------------------
}); 