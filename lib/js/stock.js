const MAX_POINTS = 500
const PADDING = 100

function setup() {
	createCanvas(windowWidth, windowHeight);
	strokeWeight(5)
	noiseDetail(5)
    RED = [100,0,0]
    GREEN = [0,100,0]
	stroke(0)
	points = []
	t = 0
}

function draw() {
	clear()

    let topLevel = points.reduce( (a,b) => max(a,b), -10 ) + 0.1
    let bottomLevel = points.reduce( (a,b) => min(a,b), 10 ) - 0.1

	gap = windowWidth/points.length

	for (let i = 1; i<points.length; i++){
        stroke( ((points[0] - points[i]) < 0 ? (RED) : (GREEN) ) )
		line( (i-1) * gap, normalizePoint(i-1, topLevel, bottomLevel), i*gap, normalizePoint(i, topLevel, bottomLevel))
	}

    line(0, normalizePoint(0, topLevel, bottomLevel), windowWidth, normalizePoint(0,topLevel, bottomLevel))

	points.shift()
	while (points.length < MAX_POINTS){
		points.push(getStockPoint(t))
		t+=0.005;
	}
	t+=0.001
}

function normalizePoint(i, t, b) {
    return ((points[i] - b) / (t - b)) * windowHeight
}

function getStockPoint(t) {
    return noise(t)
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}