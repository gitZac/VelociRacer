var crashSound = new SoundOverlapsClass("audio/crash");
var bumpSound = new SoundOverlapsClass("audio/bump");
var winSound = new SoundOverlapsClass("audio/gas2");
var backgroundMusic = new BackgroundMusicClass();
var audioFormat;
var musicOn = true;

function setFormat() {
  var audio = new Audio();
  if (audio.canPlayType("audio/mp3")) {
    audioFormat = ".ogg";
  } else {
    audioFormat = ".ogg";
  }
}

function SoundOverlapsClass(filenameWithPath) {
  // accept argument for constructor

  setFormat(); // calling this to ensure that audioFormat is set before needed

  // variables as "private", hidden to outside. Using "var " instead of "this."
  var mainSound = new Audio(filenameWithPath + audioFormat);
  var altSound = new Audio(filenameWithPath + audioFormat);
  var altSoundTurn = false;

  this.play = function () {
    if (altSoundTurn) {
      altSound.currentTime = 0;
      altSound.play();
    } else {
      mainSound.currentTime = 0;
      mainSound.play().catch((error) => {
        if (error.name === "NotAllowedError") {
          console.log(error);
          console.log("Thsi the issues");
        }
      });
    }
    altSoundTurn = !altSoundTurn;
  };
}

function BackgroundMusicClass() {
  var musicSound = null;

  this.loopSong = function (filenameWithPath) {
    setFormat(); // calling this to ensure that audioFormat is set before needed

    if (musicSound != null) {
      musicSound.pause();
      musicSound = null;
    }
    musicSound = new Audio(filenameWithPath + audioFormat);
    musicSound.loop = true;
    musicSound.play().catch((error) => {
      if (error.name === "NotAllowedError") {
        console.log(error);
        console.log("Thsi the issues");
      }
    });
  };

  this.startOrStopMusic = function () {
    if (musicSound.paused) {
      musicSound.play().catch((error) => {
        if (error.name === "NotAllowedError") {
          console.log(error);
          console.log("Thsi the issues");
        }
      });
    } else {
      musicSound.pause();
    }
  };
}
