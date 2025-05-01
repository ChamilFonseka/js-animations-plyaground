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
    });

});