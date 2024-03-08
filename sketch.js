let rainSound;
let ichigoSound;

const STATE_START = 0;
const STATE_RAIN = 1;
const STATE_INTRO_TYPE = 2;

const STATE_CORNER = 8;

const ICHIGO_DELAY = 2; // should be 8 for production
const ICHIGO_VOL = 0; // should be 0.13 for production
const RAIN_VOL = 0.003;
const CORNER_VOL = 0.02; // 0.1 for prod?


let transitionSet = new Set();

let currState = STATE_START;

let snowColor;
let snowBg;
let snowTransitionT = 0;
const snowTransitionDelta = 0.03;

let grass = [];
let clouds = [];
let collage = []
let snowList = [];

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

class Cloud {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.a = random(220, 255);
    }
  
    draw() {
        noStroke();
        fill(color(map(mouseY, 0, height, 100, 240), this.a));
        ellipse(this.x, this.y, 70, 50);
        ellipse(this.x + 10, this.y + 10, 70, 50);
        ellipse(this.x - 20, this.y + 10, 70, 50);

        this.move();
    }

    move() {
        this.x -= 0.3;
        if (this.x + 80 <= 0) {
            this.x = width + random(30);
        }
    }
}

function setup() {
    console.log("w: " + windowWidth + " h: " + windowHeight);
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 100; i++) {
        snowList.push(new Snow(int(random(0, width)), int(random(0, height)), int(random(2, 8))));
    }

    rainSound = loadSound("resources/rain.mp3");
    ichigoSound = loadSound("resources/ichigo.mp3");
    cornerSound = loadSound("resources/corner.mp3");

    for(let i = 0; i < 50; i++) {
        grass[i] = random(-5, 5);
    }

    for (let i = 0; i < 20; i++) {
        clouds[i] = new Cloud(random(width), random(height-140));
    }

    collage.push({'name': "resources/compilation/sticker.png", 'sizepct': 14});
    for (let i = 1; i < 25; i++) {
        collage.push({'name': "resources/compilation/comp" + i + ".JPG", 'sizepct': 10});
    }

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
        if (cornerSound.isLoaded() && !cornerSound.isPlaying()) {
            cornerSound.play(0, 1, CORNER_VOL);
            displayYLTLyrics();
        }
        let skyColorDay = color("#DAE6F2");
        let skyColorNight = color("#171F45");
        let sunColorDay = color("#F0DC4F");
        let sunColorNight = color("#F6F1D5");
        let grassColorDay = color(118, 242, 80, 200); 
        let grassColorNight = color("#2D5C1E");

        let skyColor = lerpColor(skyColorDay, skyColorNight, map(mouseX, 0, width, 0, 1));
        let sunColor = lerpColor(sunColorDay, sunColorNight, map(mouseX, 0, width, 0, 1));
        let grassColor = lerpColor(grassColorDay, grassColorNight, map(mouseX, 0, width, 0, 1));

        background(skyColor);
        noStroke();
        fill(grassColor);
        for(let i=20; i < width; i += 40){
            ellipse(i + map(noise(i * 1/50), 0, 1, -20, 20), height-20, 100,60 + map(noise(i * 1/50), 0, 1, -40, 20))
        }

        let i=0;
        let p=0;
        // for(var z=height-50; z<=height+30; z=z+5){
        //     for(var k=-50; k<width+50; k=k+2){
        //         stroke(grassColor);
        //         strokeWeight(2);
        //         let wind = map(noise(i * 0.0025 * frameCount), 0, 1, -6, 6);
        //         line(k+p+0.1, z, k+grass[i]+p + wind, z-15+constrain(grass[i],-5,5) + wind/10);
        //         i++;
        //         if (i==50){
        //             i=0;
        //         }
        //     }
        //    p=p+3;
        // }

        let rings = 100;
        for (let i = 0; i < rings; i++) {
            strokeWeight(10);
            stroke(lerpColor(skyColor, sunColor, i/rings));
            line(width-(rings*3-i*3), 0, width, rings*3-i*3);
        }

        clouds.forEach((e) => e.draw());
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

function mouseClicked() {
    if (currState == STATE_CORNER) {
        let collagePic = random(collage);
        animateJumpingPhoto(collagePic.name, mouseX, mouseY, collagePic.sizepct);
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
