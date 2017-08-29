window.onload = function() {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    loadGameImages();
    backgroundMusic.loopSong("audio/Klockworx");
}

function imageLoadingDoneStartGame() {
    var framesPerSecond = 30;
    setInterval(updateAll,1000/framesPerSecond);
    inputEvent();
    setInterval(timerGo, 1000);
    startScreenOn = true;
    loadLevel(emptyLevel[0]);
}

function updateAll() {
    moveEverything();
    drawEverything();
    keyHeldGasCheck(); 
}

function drawEverything() { 
    drawTracks();   
    blueCar.draw();
    drawScreens();
}

function moveEverything() {
    blueCar.move();
}