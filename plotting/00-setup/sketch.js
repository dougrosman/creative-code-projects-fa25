// Global Variables

const DPI = 96 // 96 dots per inch
const PAPER_WIDTH = 16.5 // width in inches
const PAPER_HEIGHT = 11.7 // height in inches
const FILENAME = "PlotDemo00"

p5.disableFriendlyErrors = true; // hush, p5
let bDoExportSvg = false; // set to true when you want to plot


function setup() {
    
    createCanvas(PAPER_WIDTH * DPI, PAPER_HEIGHT * DPI)

    if (bDoExportSvg){
        beginRecordSVG(this, FILENAME + ".svg");
    }

    drawSomething()

    if (bDoExportSvg){
    endRecordSVG();
    bDoExportSvg = false;
  }

}

function drawSomething() {
    const START = width/8
    const END = 7 * width/8
    const NUM_CIRCLES = 20;
    const SIZE = 80;
    const STEP = (END - START) / NUM_CIRCLES
    
    noFill()

    for(let x = 0; x < NUM_CIRCLES; x++) {

        if(x < NUM_CIRCLES/2) {
            beginSvgGroup("redCircles");
            stroke(255, 0, 0)
            circle(START + (x*STEP), height/2, x*SIZE)
            endSvgGroup();
        } else {
            beginSvgGroup("blueCircles");
            stroke(0, 0, 255)
            circle(START + (x*STEP), height/2, (NUM_CIRCLES - x) * SIZE)
            endSvgGroup();
        }

    }
}