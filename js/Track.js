const track_H = 40;
const track_W = 40;
const track_GAP = 1;
const track_COLS = 20;
const track_ROWS = 15;
var wallHit = 0;
var trackGrid = [];

function drawTracks() {//Loops through the track grid array. Draws images based on tileKindHere check.
    for (var eachCol= 0; eachCol < track_COLS; eachCol++) { 
        for (var eachRow=0; eachRow < track_ROWS; eachRow++) {
            var arrayIndex = colRowToArrayIndex(eachCol,eachRow);
            var tileKindHere = trackGrid[arrayIndex]; //sets variable equal to position on track grid.
            var leftEdgeX = track_W * eachCol; 
            var topEdgeY = track_H * eachRow; 
            var useImg = trackPics[tileKindHere]; //Sets the useImg param. on cavasContext to the track type.
            canvasContext.drawImage(useImg,leftEdgeX,topEdgeY);
        } //end row loop
    } //end col loop 
} //end function

function returnTileTypeAtColRow (col, row) { 
	if (col >= 0 && col < track_COLS &&
		row >= 0 && row < track_ROWS) { //If the two parameters are in bounds...
		var trackIndexUnderCoord = colRowToArrayIndex(col,row); 
		return (trackGrid[trackIndexUnderCoord]); //return the grid key value.
	} else {
		return TRACK_WALL; //Support for out of bounds.
	}
}

function carTrackCollision(whichCar) {
    var carTrackCol = Math.floor(whichCar.x / track_W);
    var carTrackRow = Math.floor(whichCar.y / track_H);
  
    if (carTrackCol >= 0 && carTrackCol < track_COLS &&
    	carTrackRow >= 0 && carTrackRow < track_ROWS) {
        var tileType = returnTileTypeAtColRow(carTrackCol, carTrackRow);

        if (tileType == TRACK_GOAL) {
            whichCar.speed *= -0.5;
            winSound.play();
            findLevelScore();
            nextLevelLoad();

        } else if (tileType == TRACK_LAVA) {
            currentLevelLoad();
            crashSound.play();
           
        } else if (tileType == TRACK_WATER) {
            currentLevelLoad();
            crashSound.play();
           
        } else if (tileType != TRACK_ROAD && 
                   tileType != TRACK_DIRT &&
                   tileType != TRACK_ICE &&
                   tileType != TRACK_BRIDGE &&
                   tileType != TRACK_LAVAR) {

        	whichCar.x -= Math.cos(whichCar.ang) * whichCar.speed;
            whichCar.y -= Math.sin(whichCar.ang) * whichCar.speed;
            whichCar.speed *= -0.5;
            wallHit++;
            bumpSound.play();
        }
    } //end track under car check 
} // end function

function colRowToArrayIndex(col, row) { //Important function. Indexes the grid position of a given game element.
    return arrayIndex = col + row * track_COLS;
}