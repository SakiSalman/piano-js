const keys_items = document.querySelectorAll(".piano-keys .key");
volumeSlider = document.querySelector(".volume input");
checkBox = document.querySelector(".show-key input");

const allKeys = [];
// audios
const audio = new Audio(`./assets/tunes/a.wav`);
// Play Piano
const playPiano = (key) => {
  audio.src = `./assets/tunes/${key}.wav`;
  audio.play();
  const clickedKey = document.querySelector(`[data-key="${key}"]`);

  clickedKey.classList.add("active");
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
};

keys_items.forEach((key) => {
  allKeys.push(key.dataset.key);
  key.addEventListener("click", () => playPiano(key.dataset.key));
});

// play with pressing key
const presskey = (e) => {
  if (allKeys.includes(e.key)) playPiano(e.key);
};
// handle vlume
const handleVoume = (e) => {
  audio.volume = e.target.value;
};

// show hide keys
const showhideKeys = () => {
  keys_items.forEach((key) => {
    key.classList.toggle("hide");
  });
};
checkBox.addEventListener("click", showhideKeys);
volumeSlider.addEventListener("input", handleVoume);
// play with keyboaed
document.addEventListener("keydown", presskey);
