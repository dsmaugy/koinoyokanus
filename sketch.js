let rainSound;
let ichigoSound;

const STATE_START = 0;
const STATE_RAIN = 1;
const STATE_INTRO_TYPE = 2;

const STATE_CORNER = 8;

const ICHIGO_DELAY = 2; // should be 8 for production
const ICHIGO_VOL = 0; // should be 0.13 for production
const RAIN_VOL = 0.003;

let transitionSet = new Set();

let currState = STATE_START;

let snowColor;
let snowBg;
let snowTransitionT = 0;
const snowTransitionDelta = 0.03;

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
    cornerSound = loadSound("resources/corner.mp3");

    snowColor = color(255, 255, 255);
    snowBg = color(0, 0, 0);
    drawSnow(snowBg, snowColor);
}
  
function draw() {

    if (currState == STATE_START && justResized) {
        drawSnow(snowBg, snowColor);
        justResized = false;
    } else if (currState == STATE_RAIN) {
        if (!fullscreen()) {
            // fullscreen(true);
        }
        if (rainSound.isLoaded() && !rainSound.isPlaying()) {
            rainSound.play(0, 1, RAIN_VOL);
            rainSound.setLoop(true);
            
            transitionState(STATE_RAIN, STATE_INTRO_TYPE, ICHIGO_DELAY)
        }
        drawSnow(snowBg, snowColor);
    } else if (currState == STATE_INTRO_TYPE) {
        if (ichigoSound.isLoaded() && !ichigoSound.isPlaying()) {
            ichigoSound.play(0, 1, ICHIGO_VOL);
        }
        
        snowBg = lerpColor(color(0, 0, 0), color(255, 255, 255), snowTransitionT);
        snowColor = lerpColor(color(255, 255, 255), color(20, 20, 20), snowTransitionT);
        snowTransitionT += snowTransitionDelta;

        callOnce(T_introMessage);
        drawSnow(snowBg, snowColor);
    } else if (currState == STATE_CORNER) {
        
        stroke(30, 200, 220, 5);
        for (let i = 0; i < 10; i++) {
        //   strokeWeight((250) / i);
          let x = width - random(20, 40);
          let y = 0;
          line(x, y, width, 30);
        }
    }
}

function transitionState(oldState, newState, delay) {
    let transitionKey = "" + oldState + newState;
    if (!transitionSet.has(transitionKey)) {
        transitionSet.add(transitionKey);
        setTimeout(() => {currState = newState}, delay * 1000);
    }
}


function drawSnow(snowBg, snowColor) {
    background(snowBg);

    stroke(snowColor);
    strokeWeight(3);
    snowList.forEach( (e) => {
        line(e.x, e.y, e.x - int(e.length/2), e.y + e.length);

        e.moveDown();
    });
}

function windowResized() {
    const css = getComputedStyle(canvas.parentElement),
          marginWidth = round(float(css.marginLeft) + float(css.marginRight)),
          marginHeight = round(float(css.marginTop) + float(css.marginBottom)),
          w = windowWidth - marginWidth, h = windowHeight - marginHeight;
    
    justResized = true;
    resizeCanvas(w, h, true);
}