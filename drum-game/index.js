const audio = new Audio("sounds/");
const validKeys = ["w", "a", "s", "d", "j", "k", "l"];

const drums = document.querySelectorAll(".drum");

drums.forEach((e) => {
  e.addEventListener("click", () => {
    const audio = new Audio(`sounds/${e.id}.mp3`);
    audio.play();
  });
});

window.addEventListener("keydown", (e) => {
  if (validKeys.includes(e.key)) {
    const audio = new Audio(`sounds/${e.key}.mp3`);
    audio.play();
  }
});
