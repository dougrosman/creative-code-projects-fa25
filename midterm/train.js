class Train {

    constructor(id, tracks, carWidth) {
        this.trainId = id;
        this.carWidth = carWidth;
        this.numCars = floor(random(2, 50))

        this.couplerWidth = 10;
        this.numCouplers = this.numCars-1

        this.trackNumber = floor(random(tracks.length))
        this.moveRight = random(1) < 0.5 ? true : false
        this.speed = this.moveRight ? random(1, 5): -random(1, 5)
        this.trainLength = (this.numCars * carWidth) + (this.numCouplers * this.couplerWidth)

        const xPos = this.moveRight ? -this.trainLength : width + this.carWidth;
        const yPos = tracks[this.trackNumber]
        this.position = createVector(xPos, yPos)

        this.hornBlows = []; // which trains this train has honked at
        
        this.cars = this.createTrain();
    }


    createTrain() {
        let cars = []
        for(let i = 0; i < this.numCars; i++) {
            cars.push(new TrainCar(this.carWidth, this.speed, i))
        }
        return cars;
    }

    // all the calculations that need to happen
    update() {
        // checkTrainProximity()
        // removeTrain()
        this.position.x += this.speed;
    }

    draw() {
        this.cars.forEach(car => {
            const carPosition = ((this.carWidth * car.carNumber) + (this.couplerWidth * car.carNumber))
            let carXPosition;
            if(this.trainId.moveRight) {
                carXPosition = this.position.x - carPosition;
            } else {
                carXPosition = this.position.x + carPosition;
            }
            const finalPostion = createVector(carXPosition, this.position.y)
            car.draw(finalPostion)
        })
    }


}