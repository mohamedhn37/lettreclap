let audioMap = {
    'a': new Audio('sounds/clap.wav'),
    's': new Audio('sounds/hihat.wav'),
    'd': new Audio('sounds/kick.wav'),
    'f': new Audio('sounds/openhat.wav'),
    'g': new Audio('sounds/boom.wav'),
    'h': new Audio('sounds/ride.wav'),
    'j': new Audio('sounds/snare.wav'),
    'k': new Audio('sounds/tom.wav'),
    'l': new Audio('sounds/tink.wav')
};
  
document.addEventListener('keydown', (e)=> {
let letter = e.key.toLowerCase();
if (audioMap.hasOwnProperty(letter)){
      audioMap[letter].play();
    }
  });
