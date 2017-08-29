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

function SoundOverlapsClass(filenameWithPath) { // accept argument for constructor
     
     setFormat(); // calling this to ensure that audioFormat is set before needed
     
     // variables as "private", hidden to outside. Using "var " instead of "this."
     var mainSound = new Audio(filenameWithPath+audioFormat);
     var altSound = new Audio(filenameWithPath+audioFormat);
     var altSoundTurn = false;
     
     this.play = function() { // not "var ", keeping "this.", as we need it exposed!
       if(altSoundTurn) { // note: no "this." since it’s "var" – local/private
         altSound.currentTime = 0;
         altSound.play();
       } else {
         mainSound.currentTime = 0;
         mainSound.play();
       }
       altSoundTurn = !altSoundTurn; // toggle between true and false
     }
}

function BackgroundMusicClass() {
     var musicSound = null;
       
     this.loopSong = function(filenameWithPath) {
       setFormat(); // calling this to ensure that audioFormat is set before needed
       
       if(musicSound != null) {
         musicSound.pause();
         musicSound = null;
       }
       musicSound = new Audio(filenameWithPath+audioFormat);
       musicSound.loop = true;
       musicSound.play();
     }
     
     this.startOrStopMusic = function() {
       if(musicSound.paused) {
         musicSound.play();
       } else {
         musicSound.pause();
       }
     }
   }
