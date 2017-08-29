var timeleft;
var lives;
var timerset = 15;
var timeFreeze = true;

var hudTextOn = false;
var instBoxOn = false;
var startScreenOn= false;
var gameOverOn = false;
var winScreenOn = false;

var levelScore = 0;
var totalScore = 0;
var hiScore = 0;

var topScore1 = "Zac " + 480;
var topScore2 = "Kerwin " + 405; 
var topScore3 = "Taylasdasor "+ 400;

var lineX = 0;
var lineY = 330;
var lineSpeedX = 20;

function findLevelScore() {
    var wallHitPenalty = wallHit * 5; //
    levelScore = (timeleft + lives) * 15;
    totalScore = levelScore + totalScore - wallHitPenalty;
}

function findHiScore() {
    if (totalScore > hiScore) {
        hiScore = totalScore
    }
}

function timerGo() {
    if (!timeFreeze && !startScreenOn && !gameOverOn && !winScreenOn) {
        timeleft --;
        console.log("time: " + timeleft)
        if (timeleft == 0) {currentLevelLoad();}
    }
}

function timerReset() {
    timeleft = timerset;
} 

function drawInstText() {
    drawRect(380,170,180,40,"#333");
    drawRect(580,170,200,40,"#333");
    drawText("Use Arrow Keys","25px 'Arial'", 380,200,"#fff","#333",5,5,3);
    drawText(" Press 'up' for gas","25px 'Arial'", 580,200,"#fff","#333",5,5,3);

    drawRect(200,150,50,50,"#333"); //Top box
    drawRect(200,210,50,50,"#333"); //Bottom Box
    drawRect(260,210,50,50,"#333"); //Right Box
    drawRect(140,210,50,50,"#333"); //Right Box

    drawText("Down","18px 'Arial'", 203,230,"#fff","#333",5,5,3);
    drawText("(Brake)","15px 'Arial'", 203,250,"#fff","#333",5,5,3);
    drawText("Up","18px 'Arial'", 213,170,"#fff","#333",5,5,3);
    drawText("(Gas)","15px 'Arial'", 206,193,"#fff","#333",5,5,3);
    drawText("Right","18px 'Arial'", 263,230,"#fff","#333",5,5,3);
    drawText("(Turn)","15px 'Arial'", 266,250,"#fff","#333",5,5,3);
    drawText("Left","18px 'Arial'", 150,230,"#fff","#333",5,5,3);
    drawText("(Turn)","15px 'Arial'", 148,250,"#fff","#333",5,5,3);
}

function drawStartScreen() {
    var g1 = canvasContext.createLinearGradient(0,0,0,500);
    g1.addColorStop(0,"#020110");
    g1.addColorStop(0.5,"#0401e4");
    g1.addColorStop(1,"#0463f9");
    
    var g2 = canvasContext.createLinearGradient(100,0,750,400);
    g2.addColorStop(0,"#f65157");
    g2.addColorStop(0.5,"#d9867e");
    g2.addColorStop(1,"#f2cf15");
    
    drawRect(0,0, canvas.width,canvas.height, g1);
    drawText("VELOCIRACER","100px 'Arial'",40,300,g2,"#333",5,5,3);
    drawText("Press 'Enter'","20px 'Arial'", canvas.width/2 -50,canvas.height/2 +70,"#fff","#333",5,5,3); 
    drawText("Press 'm' to disable music","10px 'Arial'",650,550,"#fff","#333",5,5,3); 
}

function drawWinScreen() {
    var g1 = canvasContext.createLinearGradient(0,0,0,500);
    g1.addColorStop(0,"#020110");
    g1.addColorStop(0.5,"#0401e4");
    g1.addColorStop(1,"#0463f9");

    var g2 = canvasContext.createLinearGradient(100,0,750,400);
    g2.addColorStop(0,"#f65157");
    g2.addColorStop(0.5,"#d9867e");
    g2.addColorStop(1,"#f2cf15");
    
    var g3 = canvasContext.createLinearGradient(100,0,750,400);
    g3.addColorStop(0,"#f65157");
    g3.addColorStop(0.5,"#d9867e");
    g3.addColorStop(1,"#f2cf15");

    var g4 = canvasContext.createLinearGradient(100,0,750,400);
    g4.addColorStop(1,"#f4efb9");
    g4.addColorStop(0.5,"#deba62");
    g4.addColorStop(0,"#f2cf15");

    lineX += lineSpeedX;
    
    drawRect(0,0, canvas.width,canvas.height, g1);
    drawRect(lineX,lineY, 500,5, g3);

    drawText("YOU WIN!","120px 'Arial'",120,250,g2,"#333",5,5,3);
    drawText("Your Score: " + totalScore,"50px 'Arial'",240,320,g3,"#333",5,5,3);
    drawText("Hi Scores ","30px 'Arial'",350,400,g4,"#333",5,5,3);
    drawText(topScore1,"20px 'Arial'",250,440,g4,"#333",5,5,3);
    drawText(topScore2,"20px 'Arial'",250,470,g4,"#333",5,5,3);
    drawText(topScore3,"20px 'Arial'",250,500,g4,"#333",5,5,3);
    drawText("Your Personal Best: " + hiScore,"20px 'Arial'",450,472,g4,"#333",5,5,3);
    drawText("Press 'Enter' to play again","20px 'Arial'", 300,550,"#fff","#333",5,5,3);
}

function drawGameOverScreen() {
    var g1 = canvasContext.createLinearGradient(0,0,0,500);
    g1.addColorStop(0,"#020110");
    g1.addColorStop(0.5,"#0401e4");
    g1.addColorStop(1,"#0463f9");

    var g2 = canvasContext.createLinearGradient(100,0,750,400);
    g2.addColorStop(0,"#f65157");
    g2.addColorStop(0.5,"#d9867e");
    g2.addColorStop(1,"#f2cf15");
    
    var g3 = canvasContext.createLinearGradient(100,0,750,400);
    g3.addColorStop(0,"#f65157");
    g3.addColorStop(0.5,"#d9867e");
    g3.addColorStop(1,"#f2cf15");

    var g4= canvasContext.createLinearGradient(100,0,750,400);
    g4.addColorStop(1,"#f4efb9");
    g4.addColorStop(0.5,"#deba62");
    g4.addColorStop(0,"#f2cf15");

    lineX += lineSpeedX;
    
    drawRect(0,0, canvas.width,canvas.height, g1);
    drawRect(lineX,lineY, 500,5, g3);

    drawText("Game Over","120px 'Arial'",120,250,g2,"#333",5,5,3);
    drawText("Your Score: " + totalScore,"50px 'Arial'",240,320,g3,"#333",5,5,3);
    drawText("Hi Scores ","30px 'Arial'",350,400,g4,"#333",5,5,3);
    drawText(topScore1,"20px 'Arial'",250,440,g4,"#333",5,5,3);
    drawText(topScore2,"20px 'Arial'",250,470,g4,"#333",5,5,3);
    drawText(topScore3,"20px 'Arial'",250,500,g4,"#333",5,5,3);
    drawText("Your Personal Best: " + hiScore,"20px 'Arial'",450,472,g4,"#333",5,5,3);
    drawText("Press 'Enter' to play again","20px 'Arial'", 300,550,"#fff","#333",5,5,3);
}

function drawHUD() {
    var levelDisplay = currentLevel + 1;
    var font = "20px 'Arial'"
    drawTextWithStroke("Time: " + timeleft,"30px 'Arial'",canvas.width/2-50, 50,"#fff",2);
    drawText("Time: " + timeleft, "30px 'Arial'", canvas.width/2-50, 50, '#1234ad',"#333",0,0,0);

    drawTextWithStroke("Lives: " + lives ,font,10, 30,"#333",4);
    drawText("Lives: " + lives, font, 10, 30, '#bba723','#333',0,0,0);

    drawTextWithStroke("Level: " + levelDisplay ,font,700, 30,"#333",4);
    drawText("Level: " + levelDisplay, font, 700, 30,'#bba723',"#333",2,2,3);

    drawTextWithStroke("Score: " + totalScore ,font,550, 30,"#333",4);
    drawText("Score: " + totalScore, font, 550, 30,'#bba723',"#333",2,2,3);
} 

function drawScreens() {
    if (startScreenOn) {drawStartScreen();}
    if (gameOverOn) {drawGameOverScreen();}
    if (winScreenOn) {drawWinScreen();}
    if (hudTextOn) {drawHUD();}
    if (instBoxOn) {drawInstText();}
}