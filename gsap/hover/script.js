document.addEventListener("DOMContentLoaded", () => {

  const box = document.querySelector(".box");
  const bar = document.querySelector(".bar");
  const arrow = document.querySelector(".arrow");

  gsap.set(bar, { scaleX: 0, transformOrigin: "left center" });
  const tl = gsap.timeline({ paused: true, defaults: { duration: 0.5 } });
  let exitTime = 0;

  tl.to(bar, { scaleX: 1 })
    .addPause();
  exitTime = tl.duration();
  tl.to(bar, { x: 100 });

  box.addEventListener("mouseenter", () => {
    if (tl.time() < exitTime) {
      tl.play();
    } else {
      tl.restart();
    }
  });

  box.addEventListener("mouseleave", () => {
    if (tl.time() < exitTime) {
      tl.reverse();
    } else {
      tl.play();
    }
  });

  //-------------------------------------------------------------------------------------------------

  let circlesHolder = document.querySelector(".small-circles-holder");
  let bigCircle = document.querySelector(".big-circle");

  for (var i = 0; i < 12; i++) {
    let circle = document.createElement("div");
    let circleWrapper = document.createElement("div");
    circle.setAttribute("class", "small-circle");
    circlesHolder.append(circleWrapper);
    circleWrapper.append(circle);
    gsap.set(circleWrapper, { rotation: i * 30 });
    gsap.set(circle, { x: 60 });
  }

  const tl2 = gsap.timeline({paused:true})
  let exitTime2 = 0

  tl2.from(".small-circle", {
    x: 30, duration: 0.4,
    stagger: {
      each: 0.05,
      ease: "power1"
    }
  });
  
  exitTime2 = tl2.duration();
  tl2.addPause();
  
  tl2.to(".small-circle", {
    x: 80,
    scale: 2,
    opacity: 0,
    duration: 0.3,
    stagger: {
      each: 0.08,
      from: "end"
    }
  });
  
  tl2.to(".small-circles-holder", { rotation: 360, duration: tl2.recent().duration(), ease: "power1.in" }, "<");

  bigCircle.addEventListener("mouseenter", () => {
    if (tl2.time() < exitTime2) {
      tl2.play();
    } else {
      tl2.restart();
    }
  });

  bigCircle.addEventListener("mouseleave", () => {
    if (tl2.time() < exitTime2) {
      tl2.reverse();
    } else {
      tl2.play();
    }
  });

    //-------------------------------------------------------------------------------------------------

    const pulse = gsap.to(arrow, {
      scale: 1,
      ease: "linear",
      repeat: -1,
      yoyo: true,
      paused: true
    });

    arrow.addEventListener("mouseenter", () => {
      pulse.restart();
    });

    arrow.addEventListener("mouseleave", () => {
      pulse.pause();
      gsap.to(arrow, {
        scale: 0.9,
      });
    });
});