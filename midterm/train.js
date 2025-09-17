class Train {

    constructor(id, tracks, carWidth, trackNumber, palette, greeting) {
        this.trainId = id;
        this.carWidth = carWidth;
        this.numCars = floor(random(2, 20))

        this.couplerWidth = 10;
        this.numCouplers = this.numCars-1

        colorMode(HSL)
        // this.color = color(random(360), 100, 70);
        this.colorPalette = palette;

        //this.trackNumber = floor(random(tracks.length))
        this.trackNumber = trackNumber
        this.moveRight = random(1) < 0.5 ? true : false
        this.speed = this.moveRight ? random(1, 3): -random(1, 3)
        this.trainLength = (this.numCars * carWidth) + (this.numCouplers * this.couplerWidth)

        const xPos = this.moveRight ? -this.trainLength : width + this.carWidth;
        const yPos = tracks[this.trackNumber]
        this.position = createVector(xPos, yPos)

        this.hornBlows = []; // which trains this train has honked at
        this.hasBlown = false;
        this.remove = false;
        this.cars = this.createTrain();
        this.greeting = greeting
    }


    createTrain() {
        let cars = []
        for(let i = 0; i < this.numCars; i++) {
            if(this.moveRight){
                cars.unshift(new TrainCar(this.trainId, this.carWidth, this.speed, i, random(this.colorPalette), this.moveRight, this.couplerWidth))    
            } else {
                cars.push(new TrainCar(this.trainId, this.carWidth, this.speed, i, random(this.colorPalette), this.moveRight, this.couplerWidth))
            }
        }
        return cars;
    }

    // all the calculations that need to happen
    update() {
        this.position.x += this.speed;
        this.removeTrain()
    }

    draw() {
        this.cars.forEach(car => {
            const carPosition = ((this.carWidth * car.carNumber) + (this.couplerWidth * car.carNumber))
            let carXPosition;
            if(this.moveRight) {
                carXPosition = this.position.x - carPosition;
            } else {
                carXPosition = this.position.x + carPosition;
            }
            const finalPostion = createVector(carXPosition, this.position.y+2)
            car.draw(finalPostion)
        })
    }

    removeTrain() {
        if(this.moveRight){
            if(this.position.x - this.trainLength > width) {
                this.remove = true;
            }
        } else {
            if(this.position.x + this.trainLength < 0) {
                this.remove = true;
            }
        }
    }


}