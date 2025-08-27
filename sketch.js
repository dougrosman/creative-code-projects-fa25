console.log("hello!")

function setup() {
    createCanvas(windowWidth, windowHeight)
}

function draw() {
    // background(220)
    ellipse(mouseX, mouseY, 40, 40)
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}