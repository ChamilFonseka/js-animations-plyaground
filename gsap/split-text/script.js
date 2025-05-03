document.addEventListener("DOMContentLoaded", function () {

  gsap.registerPlugin(SplitText);

  document.fonts.ready.then(() => {

    const split1 = SplitText.create("#chars", {
      type: "words, chars",
      onSplit(self) {
        gsap.from(self.chars, {
          opacity: 0, stagger: 0.05, y: 50, ease: "back",
        });
      }
    });

    const split2 = SplitText.create("#words", {
      type: "words",
      onSplit(self) {
        gsap.from(self.words, {
          opacity: 0, stagger: { amount: 1,}, rotation: -40, scale: 2, ease: "back",
        });
      }
    });
  });

});