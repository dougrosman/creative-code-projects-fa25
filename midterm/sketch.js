let trains = [];
let tracks = [];
let trainCounter = 0;
const trackSpacing = 80;
let whistle;
let numTracks;
let colorPalettes;

function preload() {
  whistle = loadSound("sound_files/choo_choo_fast.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  numTracks = floor(height / (trackSpacing / 1.5));
  tracks = createTracks(trackSpacing, numTracks);
  colorPalettes = createColorPalettes()

  for (let trackNumber = 0; trackNumber < numTracks; trackNumber++) {
    trains.push(new Train(trainCounter++, tracks, trackSpacing, trackNumber, random(colorPalettes)));
  }
}

function draw() {
  background(90);
  drawTracks(tracks);

  for (let t of trains) {
    t.draw();
    t.update();
  }

  checkTrainProximity(trains);
  removeTrains();
}

function createTracks(spacing, numTracks) {
  let trackPositions = [];

  for (let i = 0; i < numTracks; i++) {
    trackPositions.push((i + 1) * (spacing / 1.5));
  }
  return trackPositions;
}

function drawTracks(tracks) {
  for (let i = 0; i < tracks.length; i++) {
    const trackY = tracks[i];
    //text(i, 5, trackY)
    for (let j = 0; j < width; j += 8) {
      strokeWeight(2);
      stroke(0, 10, 50);
      line(j, trackY + 7, j + 5, trackY - 2);
    }
    strokeWeight(1);
    stroke(0);
    line(0, trackY, width, trackY);
    line(0, trackY + 5, width, trackY + 5);
  }
}

function checkTrainProximity(trains) {
  for (let i = 0; i < trains.length; i++) {
    let currentTrain = trains[i];
    for (let j = 0; j < trains.length; j++) {
      let checkTrain = trains[j];
      if (i != j) {
        if (
          currentTrain.position.dist(checkTrain.position) < 150 &&
          currentTrain.moveRight != checkTrain.moveRight
        ) {
          fill(0);
          textSize(30);

          if (!currentTrain.hasBlown) {
            whistle.play();
            currentTrain.hasBlown = true;
          }

          if (!checkTrain.hasBlown) {
            whistle.play();
            checkTrain.hasBlown = true;
          }
          text("hi!", currentTrain.position.x, currentTrain.position.y - 20);
          text("hi!", checkTrain.position.x, checkTrain.position.y - 20);
        }
      }
    }
  }
}

function windowResized() {
    numTracks = floor(height / (trackSpacing / 1.5));
    tracks = createTracks(trackSpacing, numTracks);
}

function removeTrains() {

    for(let i = 0; i < trains.length; i++) {
        const train = trains[i];
        if(train.remove == true) {
            const trackNumber = train.trackNumber;
            trains.splice(i, 1)
            trains.push(new Train(trainCounter++, tracks, trackSpacing, trackNumber, random(colorPalettes)));
            console.log(trackNumber)
        }
    }
}

function createColorPalettes() {
    let palettes = [
        ["283d3b","197278","edddd4","c44536","772e25"],
        ["0a0908","22333b","f2f4f3","a9927d","5e503f"],
        ["5f5449","9b6a6c","b09398","cedfd9","ebfcfb"],
        ["002642","840032","e59500","e5dada","02040f"],
        ["2e3532","7e9181","c7cedb","a0aab2","94849b"],
        ["001b2e","294c60","adb6c4","ffefd3","ffc49b"],
        ["5c0029","61304b","857c8d","94bfbe","acf7c1"],
        ["d3f8e2","e4c1f9","f694c1","ede7b1","a9def9"],
        ["14342b","60935d","bab700","bbdfc5","ff579f"]];

    return palettes;
}