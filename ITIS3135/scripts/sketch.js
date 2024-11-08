
function setup() {
    // Creates a canvas 600 pixels wide
    // and 400 pixels high
    createCanvas(600, 400);
    }

function draw() {
    // Sky Blue Background
    background(194, 251, 255);

    // Sun in the top right corner
    fill(255, 253, 117); //yellow

    stroke(255, 236, 94); //orange outline

    strokeWeight(10); //large outline

    circle(550, 50, 100);

    //grass on bottom
    stroke(0);

    strokeWeight(1);

    fill(124, 252, 154);//green
    
    rect(0, 200, 600, 200);

    //emojis
    textSize(75);
    text("🪷", 100, 250); //flower
    text("🦋", mouseX, mouseY); //butterfly
    }