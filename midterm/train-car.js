class TrainCar {
    constructor(carSize, speed) {
        colorMode(HSL)
        this.color = color(random(360), 100, 50);
        this.cornerRadius = random(3, 12);
        this.carSize = carSize
        this.width = this.carSize;
        this.height = this.carSize/2;
        this.rotateSpeed = speed
        this.rotateAmount = 0;
        this.numSpokes = 6;
        this.wheelSize = this.carSize/6
    }

    draw() {
        fill(this.color)
        push()
        translate(0, sin(frameCount*15, -1, 1, -20, 20))
        rect(0, 0, this.width, this.height, this.cornerRadius)
        pop()

        // create wheels
        this.drawWheel(this.width/4)
        this.drawWheel(3*this.width/4)


    }

    drawWheel(location) {
        fill(80)
        push()
        translate(location, this.height)
        rotate(this.rotateAmount-=this.rotateSpeed)
        circle(0, 0, this.wheelSize)
        for(let i = 0; i < this.numSpokes; i++) {
            push()
            rectMode(CENTER)
            angleMode(DEGREES)
            strokeWeight(0.5)
            
            rotate(map(i, 0, this.numSpokes, 0, 180))
            rect(0, 0, this.wheelSize, 0.5)
            pop()
        }
        pop()
    }

}