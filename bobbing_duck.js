var duckStartPositionY = 220;
var bodyX = 200;
var bodyY = duckStartPositionY;
var bodyW = 150;
var faceW = bodyW/2;
var bodyH = 100;
var faceH = bodyH/2;
var eyeSize = faceH/7.5;
var waveLocationsX = [50, 300, 200, 380, 200, 60, -30,/*<-positives:::negatives ->*/ -50, -90, -250, -246, -350, -275, -180];
var waveLocationsY = [50, 90, 20, 246, 350, 275, 180,/*<-positives:::negatives ->*/ 50, 300, 200, 380, 200, 60, 30];
var i = 0;
var main = 0;
var bobLength = 20;
bobLength *= 1/2;
var duckFootSize = 15;
var duckToeWidth = duckFootSize*1;
var duckToeHeight = duckFootSize*1.5;
var duckHeelWidth = duckFootSize*3;
var duckHeelHeight = duckFootSize*3;
var duckFootOffset = 30;
var duckLeftFootOffsetX = -duckFootOffset;
var duckRightFootOffsetX = duckFootOffset;
var duckFootOffsetY = 35;

function wave(waveLocationX, waveLocationY) {
    arc(waveLocationX, waveLocationY, 50, 25, 0, 180);
    arc(waveLocationX-50, waveLocationY, 50, 25, 0, 90);
    arc(waveLocationX+50, waveLocationY, 50, 25, 90, 180);
    if (waveLocationX > 500){
        waveLocationsX[main] -= 600;
    }
}

draw = function() {
    background(207, 254, 255);
    
    //waves
    stroke(0, 0, 0);
    strokeWeight(5);
    noFill();
    while (main < 14) {
        wave(waveLocationsX[main]+i, waveLocationsY[main]);
        main++;
    }
    main = 0;
    i++;
    
    //duck
    noStroke();
    
    //bob
    bodyY = duckStartPositionY + sin(frameCount)*4*bobLength;
    //thanks to a contribution by Khan Academy user Bluish for the base function I used to get this to work.

    //main shapes
    fill(240, 209, 36);
    ellipse(bodyX, bodyY, bodyW, bodyH); // body
    ellipse(bodyX, bodyY-70, faceW, faceH); // face
    
    //facial features
    fill(0, 0, 0);
    ellipse(bodyX-15, bodyY-75, eyeSize, eyeSize);
    ellipse(bodyX+15, bodyY-75, eyeSize, eyeSize);
    fill(255, 170, 0);
    ellipse(bodyX, bodyY-60, faceW/2, faceH/4);
    fill(212, 141, 0);
    arc(bodyX, bodyY-57.5, faceW/2, faceH/9, 200, 340);
    
    //wings
    fill(217, 187, 35);
    rotate(30);
    arc(bodyX+49, bodyY-123, bodyW/1.5, bodyH/3, 90, 270);
    rotate(-60);
    arc(bodyX-100, bodyY+77, bodyW/1.5, bodyH/3, 270, 450);
    rotate(30);
    
    //legs
    fill(212, 141, 0);
    //left foot
    arc(bodyX+duckLeftFootOffsetX, bodyY+duckFootOffsetY, duckToeWidth, duckToeHeight, 180, 360);
    arc(bodyX+duckLeftFootOffsetX+duckToeWidth, bodyY+duckFootOffsetY, duckToeWidth, duckToeHeight, 180, 360);
    arc(bodyX+duckLeftFootOffsetX-duckToeWidth, bodyY+duckFootOffsetY, duckToeWidth, duckToeHeight, 180, 360);
    arc(bodyX+duckLeftFootOffsetX, bodyY+duckFootOffsetY, duckHeelWidth, duckHeelHeight, 0, 180);
    //right foot
    arc(bodyX+duckRightFootOffsetX, bodyY+duckFootOffsetY, duckToeWidth, duckToeHeight, 180, 360);
    arc(bodyX+duckRightFootOffsetX+duckToeWidth, bodyY+duckFootOffsetY, duckToeWidth, duckToeHeight, 180, 360);
    arc(bodyX+duckRightFootOffsetX-duckToeWidth, bodyY+duckFootOffsetY, duckToeWidth, duckToeHeight, 180, 360);
    arc(bodyX+duckRightFootOffsetX, bodyY+duckFootOffsetY, duckHeelWidth, duckHeelHeight, 0, 180);
};
