const SPEED_DECAY = 0.98;
const SPEED_GAS = 0.2;
const TURN_SPEED = 0.1;
const SPEED_REVERSE = 0.2 ;

var blueCar = new carClass();
var greenCar = new carClass();

function carClass() {
	this.x; //X position of car
	this.y; //Y position of car
	this.ang = 0;
	this.speed = 0;
	this.myCarPic;
	this.name = "Untitled"; 

	this.move = function() {
	    this.speed *= SPEED_DECAY; //speed damperer
	    this.x += Math.cos(this.ang) * this.speed;
	    this.y += Math.sin(this.ang) * this.speed;

	    if (keyHeld_TurnLeft) {this.ang -=TURN_SPEED;}
	    if (keyHeld_Gas) {this.speed +=SPEED_GAS;}
	    if (keyHeld_TurnRight) {this.ang +=TURN_SPEED;}
	    if (keyHeld_Reverse) {this.speed -=SPEED_REVERSE;}

	    carTrackCollision(this);
	}

	this.reset = function(whichImage, carName) {
		this.myCarPic = whichImage;
		this.name = carName; 
		this.speed = 0;
		this.ang = 0;
	    for (var eachRow=0; eachRow < track_ROWS; eachRow++) {
	        for (var eachCol=0; eachCol < track_COLS; eachCol++) {
	            arrayIndex = colRowToArrayIndex (eachCol,eachRow);
	            if (trackGrid[arrayIndex] == TRACK_PLAYERSTART) {//Sets player at index.
	            	if (currentLevel == 0 || currentLevel == 1 || currentLevel == 4|| currentLevel == 6) {
	                	trackGrid[arrayIndex] = TRACK_ROAD; //Places a road at the position.
	            	} else if (currentLevel == 2 || currentLevel == 5) {
	            		trackGrid[arrayIndex] = TRACK_ICE; //Places a road at the position.
	            	}	else {
	            		trackGrid[arrayIndex] = TRACK_DIRT;
	            	}
	                this.x = (eachCol * track_W); //loads coords of car.
	                this.y = (eachRow * track_H);
	                return;
	            } //end PLAYERSTART index check.
	        }//End col loop. 
	    }//End row loop.
	}//End func.

	 this.draw = function() {    
	    drawBitmapCenteredWithRotation(this.myCarPic, this.x, this.y, this.ang);
	}
}