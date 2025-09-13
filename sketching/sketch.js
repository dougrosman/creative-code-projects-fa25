
let myCircle = {
    x: 10,
    y: 10,
    size: 100
}

function setup() {
    createCanvas(200, 200)
    background(200);

    ellipse(myCircle.x, myCircle.y, myCircle.size)
    console.log(myCircle)
}