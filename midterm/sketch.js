let trains = [];
let tracks = [];
let trainCounter = 0;
const trackSpacing = 50;
let whistle;
let numTracks;

function preload() {
    whistle = loadSound('sound_files/choo_choo_fast.mp3')
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    numTracks = floor(height/(trackSpacing/1.5));
    tracks = createTracks(trackSpacing, numTracks);

    for(let i = 0; i < numTracks; i++) {
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

function createTracks(spacing, numTracks) {
    let trackPositions = [];
    
    for(let i = 0; i < numTracks; i++) {
        trackPositions.push((i+1)*(spacing/1.5))
    }
    return trackPositions;
 }

 function drawTracks(tracks) {
    for(let i = 0; i < tracks.length; i++) {
        const trackY = tracks[i]
        //text(i, 5, trackY)
        for(let j = 0; j < width; j+=8) {
            strokeWeight(2)
            stroke(0, 10, 50)
            line(j, trackY+7, j+5, trackY-2)
        }
        strokeWeight(1)
        stroke(0)
        line(0, trackY, width, trackY)
        line(0, trackY+5, width, trackY+5)
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