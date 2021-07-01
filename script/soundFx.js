const soundFxBtn = document.getElementById("toggle-sound");
const music = document.querySelector('[data-audio="music"]');

soundFxBtn.addEventListener("click", () => {
  let isPlaying = JSON.parse(soundFxBtn.getAttribute("data-playing"));
  console.log(typeof isPlaying);
  if (!isPlaying) {
    music.play();
    soundFxBtn.setAttribute("data-playing", "true");
    soundFxBtn.innerHTML = "Sound off";
  } else {
    music.pause();
    music.currentTime = 0;
    soundFxBtn.setAttribute("data-playing", "false");
    soundFxBtn.innerHTML = "Sound on";
  }
});
