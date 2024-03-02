let rainSound;
let ichigoSound;

const STATE_START = 0;
const STATE_RAIN = 1;

const ICHIGO_DELAY = 1; // should be 8 for production
const ICHIGO_VOL = 0.13;
const RAIN_VOL = 0.003;

const wipeRotateSpeed = 0.02;
let wipeRotateAngle = 0;

let currState = STATE_START;

let justResized = false;
class Snow {

    delta = 8;

    constructor(x, y, length) {
        this.x = x;
        this.y = y;
        this.length = length;
    }

    moveDown() {
        this.x -= this.delta;
        this.y += this.delta;
        this.delta += 0.01;

        if (this.x <= 0 || this.y >= height) {
            this.delta = 8;
            if (int(random(0, 1) < 0.5)) {
                // start on top
                this.y = 0;
                this.x = int(random(0, width));
            } else {
                // start on side
                this.x = width;
                this.y = int(random(0, height));
            }
        }
    }
}

var snowList = [];

function setup() {
    console.log("w: " + windowWidth + " h: " + windowHeight);
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 100; i++) {
        snowList.push(new Snow(int(random(0, width)), int(random(0, height)), int(random(2, 8))));
    }

    rainSound = loadSound("resources/rain.mp3");
    ichigoSound = loadSound("resources/ichigo.mp3");

    drawSnow();
}
  
function draw() {
    if (currState == STATE_START && justResized) {
        drawSnow();
        justResized = false;
    }

    if (currState == STATE_RAIN) {
        if (!fullscreen()) {
            // fullscreen(true);
        }
        if (rainSound.isLoaded() && !rainSound.isPlaying()) {
            rainSound.play(0, 1, RAIN_VOL);
            rainSound.setLoop(true);

            ichigoSound.play(ICHIGO_DELAY, 1, ICHIGO_VOL);
        }
        // drawSnow();
        wipeAnimation((255, 255, 255));
    }
}

function drawSnow() {
    background(0);

    stroke(color(255, 255, 255));
    strokeWeight(3);
    snowList.forEach( (e) => {
        line(e.x, e.y, e.x - int(e.length/2), e.y + e.length);

        e.moveDown();
    });
}

function wipeAnimation(color) {
    if (wipeRotateAngle < Math.PI) {
        beginShape();
        vertex(width/2, height/2);
        let topCornerAngle = Math.atan((width/2)/(height/2));
        let bottomCornerAngle = 5;
        

        if (wipeRotateAngle < topCornerAngle) {
            // draw tip of line on top of screen
            let dist = (height/2)*Math.tan(wipeRotateAngle);
            vertex((width/2) + dist, 0);
            vertex((width/2) - dist, 0);
        } else if (wipeRotateAngle > topCornerAngle) {
            vertex(0, 0);
            vertex(width, 0);
            
            let dist = (width/2)*Math.tan((Math.PI/2) - wipeRotateAngle);
            vertex(0, height/2 - dist);
            vertex(width, height/2 - dist);
        }

        
        endShape(CLOSE);

        wipeRotateAngle += wipeRotateSpeed;
    } else {
        // it's already done!
        background(color)
    }
}

function windowResized() {
    const css = getComputedStyle(canvas.parentElement),
          marginWidth = round(float(css.marginLeft) + float(css.marginRight)),
          marginHeight = round(float(css.marginTop) + float(css.marginBottom)),
          w = windowWidth - marginWidth, h = windowHeight - marginHeight;
    
    justResized = true;
    resizeCanvas(w, h, true);
}