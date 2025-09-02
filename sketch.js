console.log("hello!")

function setup() {
    createCanvas(windowWidth, windowHeight)
    noCursor()
}

function draw() {
    clear()
    ellipse(mouseX, mouseY, 30, 30)

    const step = width/40;
    for(let x = 0; x < width; x+=step) {
        let s = map(x, 0, width, .01, 1)
        if(x > width/2) {
            s = map(x, 0, width, 1, 0.001)
        }
        
        strokeWeight(s)
        line(x, 0, mouseX, mouseY-10)
        line(x, height, mouseX, mouseY+10)
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}