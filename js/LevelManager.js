function loadLevel(whichLevel) {
    trackGrid = whichLevel.slice();
    blueCar.reset(carPic,"Blue");
    timerReset();
}

function nextLevelLoad() {
	if (currentLevel == lastLevel) {
        findHiScore();
        loadLevel(emptyLevel[0]);
		winScreenOn = true;
		hudTextOn = false;
        timeFreeze = true; 

	} else {
		currentLevel++;
	    timerReset();
        wallHit = 0;
    	loadLevel(levelList[currentLevel]);
        timeFreeze = true;
	}
}

function currentLevelLoad() {
	lives--;
    timerReset();

    if (lives != 0) {
        crashSound.play();
    	loadLevel(levelList[currentLevel]);
        timeFreeze = true;

    } else {
        crashSound.play();
        loadLevel(emptyLevel[0]);
    	gameOverOn = true;
        timeFreeze = true;
    	hudTextOn = false;
        findHiScore();
    }
}

function gameReset() {
    startScreenOn = false;
    gameOverOn = false;
    winScreenOn = false;
    hudTextOn = true;
    instBoxOn = true;
    timeFreeze = true;
    currentLevel = 0;
    lives = 3;
    wallHit = 0;
    totalScore = 0;
    lineX = 0;
    timerReset();
    loadLevel(levelList[0]); 
}