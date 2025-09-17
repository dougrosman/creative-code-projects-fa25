class TrainCar {
    constructor(carWidth, speed, carNumber, color, moveRight) {
        // colorMode(HSL)
        // this.color = color(random(360), 100, 50);
        this.color = color
        this.cornerRadius = 3;
        this.width = carWidth;
        this.height = carWidth/3;
        this.rotateSpeed = speed
        this.rotateAmount = 0;
        this.numSpokes = 6;
        this.wheelSize = this.width/6;
        this.carNumber = carNumber;
        this.moveRight = moveRight
    }

    draw(position) {
        fill(this.color)
        push()
            translate(position.x, position.y-this.height-this.wheelSize/4)
            push()
                // bob up and down
                translate(0, sin(frameCount*15, -1, 1, -20, 20))
                if(this.carNumber === 0) {
                    if(this.moveRight){
                        rect(0, 0, this.width, this.height, this.cornerRadius, this.cornerRadius*4, this.cornerRadius, this.cornerRadius)
                    } else {
                        rect(0, 0, this.width, this.height, this.cornerRadius*4, this.cornerRadius, this.cornerRadius, this.cornerRadius)
                    }
                    
                } else {
                    rect(0, 0, this.width, this.height, this.cornerRadius)
                }
                // textAlign(CENTER)
                // textSize(20)
                // fill(255)
                // text(this.carNumber, this.width/2, this.height/1.5)
            pop()
        

        // create wheels
        this.drawWheel(this.width/5)
        this.drawWheel(4*this.width/5)
        pop()

    }

    drawWheel(location) {
        fill(80)
        push()
        translate(location, this.height)
        rotate(this.rotateAmount+=this.rotateSpeed)
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