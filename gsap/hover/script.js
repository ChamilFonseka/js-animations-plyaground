document.addEventListener("DOMContentLoaded", () => {

  const box = document.querySelector(".box");
  const bar = document.querySelector(".bar");

  gsap.set(bar, { scaleX: 0, transformOrigin: "left center" });
  const tl = gsap.timeline({ paused: true, defaults: { duration: 0.5 } });
  let exitTime = 0;

  tl.to(bar, { scaleX: 1 })
  .addPause();
  exitTime = tl.duration();
  tl.to(bar, { x: 100 });

  box.addEventListener("mouseenter", () => {
    if(tl.time() < exitTime) {
      tl.play();
    } else {
      tl.restart();
    }
  });

  box.addEventListener("mouseleave", () => {
    if(tl.time() < exitTime) {
      tl.reverse();
    } else {
      tl.play();
    }
  });
});