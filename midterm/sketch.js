let trains = [];
let tracks = [];
let trainCounter = 0;
const trackSpacing = 80;
let whistle;

function preload() {
    whistle = loadSound('sound_files/choo_choo_fast.mp3')
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    tracks = createTracks(trackSpacing);
    

    for(let i = 0; i < 10; i++) {
        trains.push(new Train(trainCounter++, tracks, trackSpacing, i))
    }
}

function draw() {
    background(255)
    drawTracks(tracks)

    for(let t of trains) {
        t.draw()
        t.update()

    }
    checkTrainProximity(trains);
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

 function checkTrainProximity(trains) {

    for(let i = 0; i < trains.length; i++) {
        let currentTrain = trains[i]
     for(let j = 0; j < trains.length; j++) {
        let checkTrain = trains[j]
        if(i != j) {
            if(currentTrain.position.dist(checkTrain.position) < 150 && currentTrain.moveRight != checkTrain.moveRight) {
                fill(0)
                textSize(30)

                if(!currentTrain.hasBlown) {
                    whistle.play()
                    currentTrain.hasBlown = true;
                }

                if(!checkTrain.hasBlown) {
                    whistle.play()
                    checkTrain.hasBlown = true;
                }
                text("hi!", currentTrain.position.x, currentTrain.position.y - 20)
                text("hi!", checkTrain.position.x, checkTrain.position.y - 20)


            }

        }

    }
}



 }