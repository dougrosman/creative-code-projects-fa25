let train;
let tracks = [];
let trainCounter = 0;
const trackSpacing = 80;

function setup() {
    createCanvas(windowWidth, windowHeight)
    tracks = createTracks(trackSpacing);

    //car = new TrainCar(100, 2, true);
    train = new Train(trainCounter++, tracks, trackSpacing)
    console.log(train.moveRight)

}

function draw() {
    background(255)
    drawTracks(tracks)

    train.draw()
    train.update()
}

function createTracks(spacing) {
    const numTracks = floor(height/spacing) - 1;
    let trackPositions = [];
    
    for(let i = 0; i < numTracks; i++) {
        trackPositions.push((i+1)*spacing)
    }
    return trackPositions;
 }

 function drawTracks(tracks) {
    for(let i = 0; i < tracks.length; i++) {
        const trackY = tracks[i]
        text(i, 5, trackY)
        line(0, trackY, width, trackY)
        //line(0, i * spacing - 5, width, i * spacing - 5)
    }
 }