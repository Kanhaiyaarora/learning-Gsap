var menu = document.querySelector("#nav i");
var cross = document.querySelector("#full i");

var tl = gsap.timeline();

tl.to("#full", {
  right: 0,
  duration: 0.1,
});
tl.from("#full h4", {
  x: 120,
  duration: 0.1,
  stagger: 0.3,
  opacity: 0,
});
tl.from("#full i", {
  opacity: 0,
});

tl.pause();

menu.addEventListener("click", function () {
  tl.play();
});

cross.addEventListener("click", function () {
  tl.reverse();
});

gsap.to("#page2 h1", {
  transform: "translateX(-250%)",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    marker: true,
    start: "top 0%",
    end: "top -150%",
    scrub: 2,
    pin: true,
  },
});

gsap.to("#my-box", {
  y: -100,
  duration: 2,
  delay: 2,
  yoyo: true,
  repeat: -1,
});

gsap.from("#my-box h1", {
  opacity: 0,
  y: 10,
  duration: 1,
  delay: 1,
  stagger: 0.3,
});

function breakTheText() {
  var h1 = document.querySelector("#page3 h1");
  var h1Text = h1.textContent;

  var splittedText = h1Text.split("");
  var halfLength = splittedText.length / 2;

  var clutter = "";

  splittedText.forEach(function (elem, idx) {
    if (idx < halfLength) {
      clutter += `<span class="a">${elem}</span>`;
    } else {
      clutter += `<span class="b">${elem}</span>`;
    }
  });
  h1.innerHTML = clutter;
}

breakTheText();

gsap.from("h1 .a", {
  y: 80,
  duration: 0.6,
  delay: 0.5,
  stagger: 0.15,
  opacity: 0,
});

gsap.from("h1 .b", {
  y: 80,
  duration: 0.6,
  delay: 0.5,
  stagger: -0.15,
  opacity: 0,
});
