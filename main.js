
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

        if (this.x <= 0 || this.y >= height) {
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
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 100; i++) {
        snowList.push(new Snow(int(random(0, width)), int(random(0, height)), int(random(2, 8))));
    }
}

function windowResized() {
    const css = getComputedStyle(canvas.parentElement),
          marginWidth = round(float(css.marginLeft) + float(css.marginRight)),
          marginHeight = round(float(css.marginTop) + float(css.marginBottom)),
          w = windowWidth - marginWidth, h = windowHeight - marginHeight;
  
    resizeCanvas(w, h, true);
  }
  
function draw() {
    background(0);

    stroke(color(255, 255, 255));
    strokeWeight(3);
    snowList.forEach( (e) => {
        line(e.x, e.y, e.x - int(e.length/2), e.y + e.length);

        e.moveDown();
    });
}
