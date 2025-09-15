class Train {

    constructor(id, numTracks, carWidth) {
        this.trainId = id;
        this.carWidth = carWidth;
        this.numCars = floor(random(2, 50))

        this.couplerWidth = 10;
        this.numCouplers = this.numCars-1

        this.trackNumber = floor(random(numTracks))
        this.right = random(1) < 0.5 ? true : false
        this.speed = random(1, 5)
        this.position = this.moveLeft ? -this.carWidth : width + this.carWidth;

        this.hornBlows = []; // which trains this train has honked at
        
        this.createTrain();
        this.cars = this.createTrain();
    }


    createTrain() {
        let cars = []
        for(let i = 0; i < this.numCars; i++) {
            cars.push(new TrainCar(this.carWidth, this.speed, i))
        }
        return cars;
    }

    drawTrain() {
        this.cars.forEach(car => {
            car.draw(this.position * car.width+)
        })
    }


}