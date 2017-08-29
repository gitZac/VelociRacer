var carPic = document.createElement('img');
var carPic2 = document.createElement('img');
var trackPics = [];

var picsToLoad = 0; //set based on imageList in loadGameImages.

function beginLoadingImage(imgVar, fileName){
    imgVar.onload = countLoadedImagesAndLaunch;
    imgVar.src = "images/"+fileName;
}

function loadImageForTrackCode(trackCode, fileName) {
    trackPics[trackCode] = document.createElement("img");
    beginLoadingImage(trackPics[trackCode],fileName); 
} 

function loadGameImages () {
    var imageList = [
        {varName: carPic,  theFile: "player1car.png"},
        {varName: carPic2,  theFile: "player2car.png"},
        {trackType: TRACK_ROAD,  theFile: "track_road.png"},
        {trackType: TRACK_WALL,  theFile: "track_wall.png"},
        {trackType: TRACK_GOAL,  theFile: "track_goal.png"},
        {trackType: TRACK_FLAG,  theFile: "track_flag.png"},
        {trackType: TRACK_TREE,  theFile: "track_tree.png"},
        {trackType: TRACK_DIRT,  theFile: "track_dirt.png"},
        {trackType: TRACK_LAVA,  theFile: "track_lava.png"},
        {trackType: TRACK_ICE,  theFile: "track_ice.png"},
        {trackType: TRACK_SNOW,  theFile: "track_snow.png"},
        {trackType: TRACK_BRIDGE,  theFile: "track_bridge.png"},
        {trackType: TRACK_WATER,  theFile: "track_water.png"},
        {trackType: TRACK_LAVAW,  theFile: "track_wall.png"},
        {trackType: TRACK_LAVAR,  theFile: "track_road.png"},
    ];
    
    picsToLoad = imageList.length;
    
    for (var i=0; i<imageList.length;i++){ //cycle through all the values in imageList
        if (imageList[i].varName != undefined) { //If[i] varName exists (ie. car pic image)
            beginLoadingImage(imageList[i].varName, imageList[i].theFile); //Fire function that loads the carpic image
        } else {
            loadImageForTrackCode(imageList[i].trackType, imageList[i].theFile); //Load track image.
        }   
    }    
}

function countLoadedImagesAndLaunch() {
    picsToLoad--;
    //console.log("Images to load " + picsToLoad); 
    
    if (picsToLoad == 0) {
        imageLoadingDoneStartGame(); 
    }
}

