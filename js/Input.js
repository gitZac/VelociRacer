//KEYBOARD
const KEY_PAD_LEFT = 37;
const KEY_PAD_UP = 38;
const KEY_PAD_RIGHT = 39;
const KEY_PAD_DOWN = 40;
const KEY_ENTER = 13;
const KEY_M =77;
//booleans that allow for a "gamepad feel" used in keyRelease();

var keyHeld_Gas = false;
var keyHeld_Reverse = false;
var keyHeld_TurnLeft = false;
var keyHeld_TurnRight = false;
var keyHeld_Enter = false;
var keyHeld_M = false;
//MOUSE
var mouseX;
var mouseY;

function inputEvent () {//called in window.onload() Main.js
    canvas.addEventListener('mousemove',updateMousePos);
    document.addEventListener('keydown', keyPressed);
    document.addEventListener('keyup', keyReleased);
}

function updateMousePos(evt) {//Called in Main.js
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;

    mouseX = evt.clientX - rect.left - root.scrollLeft;
    mouseY = evt.clientY - rect.top - root.scrollTop;
}
 
function keyPressed(evt) {
    if (evt.keyCode == KEY_PAD_LEFT) {keyHeld_TurnLeft = true;}
    if (evt.keyCode == KEY_PAD_UP) {
        keyHeld_Gas = true;
        timeFreeze = false; 
        instBoxOn = false;       
    }

    if (evt.keyCode == KEY_PAD_RIGHT) {keyHeld_TurnRight = true;}
    if (evt.keyCode == KEY_PAD_DOWN) {keyHeld_Reverse = true;}
    evt.preventDefault();

    if (evt.keyCode == KEY_M) {

        musicOn = !musicOn;
        if (musicOn) {
            backgroundMusic.loopSong("audio/Klockworx");
        } else {
            backgroundMusic.loopSong("");
        }
    }

    if (startScreenOn || gameOverOn || winScreenOn) {
        if (evt.keyCode == KEY_ENTER) {
        	keyHeld_Enter = true;
            gameReset();
        } //end keyEnter check 
    } //End Screen Check
} //End keyPressed();

function keyHeldGasCheck () {
    if (keyHeld_Gas && !startScreenOn && !gameOverOn && !winScreenOn) {
        timeFreeze = false;
    }
}

function keyReleased(evt) {//Called in Main.js
    if (evt.keyCode == KEY_PAD_LEFT) {keyHeld_TurnLeft = false;}
    if (evt.keyCode == KEY_PAD_UP) {keyHeld_Gas = false;}
    if (evt.keyCode == KEY_PAD_RIGHT) {keyHeld_TurnRight = false;}
    if (evt.keyCode == KEY_PAD_DOWN) {keyHeld_Reverse = false;}
    if (evt.keyCode == KEY_ENTER){keyHeld_Enter = false;} 
}