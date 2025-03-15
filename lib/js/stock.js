const MAX_POINTS = 500

function setup() {
	createCanvas(windowWidth, windowHeight);
	strokeWeight(2)
	noiseDetail(5)
	stroke(0)
	points = []
	t = 0
}

function draw() {
	background(255)
	noFill()
	noiseSeed(0)
	beginShape()
	vertex(0,0)
	gap = windowWidth/points.length
	for (let i = 1; i<points.length; i++){
		vertex(i*gap,points[i]*windowHeight)
	}
	vertex(windowWidth, 0)
	endShape(CLOSE)
	noStroke()
	points.shift()
	while (points.length < MAX_POINTS){
		addStockPoint()
		t+=0.005;
	}
	noStroke()
	t+=0.001
}

function addStockPoint() {
    points.push(noise(t))
}