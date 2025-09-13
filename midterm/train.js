class Train {

    constructor(id, numTracks, trainSize) {
        this.trainId = id;
        this.trackNumber = floor(random(numTracks))
        this.moveLeft = random(1) < 0.5 ? true : false
        this.numCars = floor(random(2, 50))
        this.speed = random(1, 5)
        this.position = this.moveLeft ? -trainSize : width + trainSize;
        this.hornBlows = [];
    }




}