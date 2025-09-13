let car;

function setup() {
    createCanvas(windowWidth, windowHeight)

    car = new TrainCar(100, 2);


}

function draw() {
background(255)
    push()
    translate(100, 100);
    car.draw()
    pop()
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
    //createEnvironment()
}

function createEnvironment() {
    const spacing = 80;
    const numTracks = floor(height/spacing);
    
    for(let i = numTracks; i > 0; i--) {
        line(0, i * spacing, width, i * spacing)
        line(0, i * spacing - 5, width, i * spacing - 5)
    }
 }