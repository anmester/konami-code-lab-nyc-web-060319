const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let konamiIndex = 0;

function init() {
  document.body.addEventListener('keydown', function(event) {
    const key = event.key
    if (key === codes[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === codes.length) {
        alert('u solved konami!');
        konamiIndex = 0;
      }
    }
    else {
      konamiIndex = 0;
    }
  });
}
