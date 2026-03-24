console.log("started the program");
console.log("program");
window.addEventListener("keydown", (e) => {
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    const key = document.querySelector(`.key[data-key="${e.key}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
});

const remKeys = document.querySelectorAll(".key");
remKeys.forEach((key) => {
  key.addEventListener('transitionend',removeTransition);
});

function removeTransition(e){
    if(e.propertyName!=='transform') return;
    this.classList.remove('playing');

}
console.log("reached at end");
