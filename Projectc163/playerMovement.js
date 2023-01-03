AFRAME.registerComponent("player-movement", {
  init: function () {
    this.walk();
  },
  walk: function () {
    window.addEventListener("keydown", (e) => {
      // Add the condition to play sound
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        var sound = document.querySelector('#sound2')
        sound.components.sound.playSound()
      }


    });
  },
});


