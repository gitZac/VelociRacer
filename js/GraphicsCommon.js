var canvas, canvasContext;

function drawBitmapCenteredWithRotation (useBitmap, atX, atY, withAng) {
    canvasContext.save();
    canvasContext.translate(atX,atY);
    canvasContext.rotate(withAng);
    canvasContext.drawImage(useBitmap, -useBitmap.width/2,-useBitmap.height/2);
    canvasContext.restore();
} 

// function drawRect (pointX,pointY, rectWidth,rectHeight, fillColor) {
//     canvasContext.fillStyle = fillColor;
//     canvasContext.fillRect(pointX,pointY, rectWidth,rectHeight);
// }

// function drawCirc (pointX,pointY, radius, fillColor) {
//     canvasContext.fillStyle = fillColor;
//     canvasContext.beginPath();
//     canvasContext.arc(pointX,pointY,radius,0,Math.PI*2,true);
//     canvasContext.fill();
// }

function drawText(textSay,textFont,pointX,pointY,fillColor,shadowColor,offSetX,offSetY,blur) {
    canvasContext.shadowColor = shadowColor;
    canvasContext.shadowOffsetX = offSetX;
    canvasContext.shadowOffsetY = offSetY;
    canvasContext.shadowBlur = blur; 
    canvasContext.fillStyle = fillColor;
    canvasContext.font = textFont;
    canvasContext.fillText(textSay,pointX,pointY);
}

function drawTextWithStroke (strokeSay,textFont,pointX,pointY,strokeColor,lineWidth) {
    canvasContext.font = textFont;
    canvasContext.lineWidth = lineWidth;
    canvasContext.strokeStyle = strokeColor;
    canvasContext.strokeText(strokeSay,pointX,pointY);
}