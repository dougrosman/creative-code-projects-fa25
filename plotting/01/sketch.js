// Global Variables

const DPI = 96 // 96 dots per inch
const PAPER_WIDTH = 16.5 // width in inches
const PAPER_HEIGHT = 11.7 // height in inches
const FILENAME = "PlotDemo01"

p5.disableFriendlyErrors = true; // hush, p5

let bDoExportSvg = true; 
let mySvgFont

function preload() {
    mySvgFont = new SvgFont("HersheySans1.svg");
}

function setup() {
    
    createCanvas(PAPER_WIDTH * DPI, PAPER_HEIGHT * DPI)
    angleMode(DEGREES)

    if (bDoExportSvg){
        beginRecordSVG(this, FILENAME + ".svg");
    }

    const pointTL = createVector(width/8, height/8)
    const pointBL = createVector(width/8, 7*height/8)

    const pointTR = createVector(7*width/8, height/8)
    const pointBR = createVector(7*width/8, 7*height/8)

    const NUM_LINES = 180
    const DENSITY = 360 / NUM_LINES

    const randomLeft = floor(random(0, NUM_LINES))
    const randomRight = floor(random(0, NUM_LINES))
    const randomTop = floor(random(0, NUM_LINES))
    const randomBottom = floor(random(0, NUM_LINES))

    for(let i = 0; i < NUM_LINES; i++) {

        const lerpAmountLeft = map(sin(randomLeft+i*DENSITY), -1, 1, 0, 1)
        const lerpAmountRight = map(sin(randomRight+i*DENSITY), -1, 1, 0, 1)
        const lerpAmountTop = map(sin(randomTop+i*DENSITY), -1, 1, 0, 1)
        const lerpAmountBottom = map(sin(randomBottom+i*DENSITY), -1, 1, 0, 1)

        const pointTLtoBL = p5.Vector.lerp(pointTL, pointBL, lerpAmountLeft)
        const pointTRtoBR = p5.Vector.lerp(pointTR, pointBR, lerpAmountRight)
        const pointTLtoTR = p5.Vector.lerp(pointTL, pointTR, lerpAmountTop)
        const pointBLtoBR = p5.Vector.lerp(pointBL, pointBR, lerpAmountBottom)
        //stroke(255 * (i % 2), 0, 255 * ((i+1) % 2))
        // stroke(0)
        // strokeWeight(0.25)
        // line(pointTLtoTR.x, height/8, pointTLtoTR.x, pointTLtoBL.y, 5)
        // line(width/8, pointTLtoBL.y, pointBLtoBR.x, pointTRtoBR.y, 5)
        
        stroke(0)
        strokeWeight(.5)
        const circleSize = 10
        noFill();
        line(pointTLtoTR.x, pointTLtoBL.y, pointBLtoBR.x, pointTRtoBR.y)
        // circle(pointTLtoTR.x, pointTLtoBL.y, circleSize)
        // circle(pointBLtoBR.x, pointTRtoBR.y, circleSize)


    }
    const fontScale = 14
    const margin = 4;
    mySvgFont.drawString(`L: ${randomLeft}`, 15*width/16, fontScale*2 + 2*margin, fontScale);
    mySvgFont.drawString(`R: ${randomRight}`, 15*width/16, fontScale*3 + 3*margin, fontScale);
    mySvgFont.drawString(`T: ${randomTop}`, 15*width/16, fontScale*4 + 4*margin, fontScale);
    mySvgFont.drawString(`B: ${randomBottom}`, 15*width/16, fontScale*5 + 5*margin, fontScale);

    if (bDoExportSvg){
    endRecordSVG();
    bDoExportSvg = false;
  }

}