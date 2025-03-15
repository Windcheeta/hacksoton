function setup() {
	createCanvas(windowWidth, windowHeight);
	strokeWeight(2)
	noiseDetail(5)
	max_points = 500
	noStroke()
	points = []
	t = 0
}

function find_perlin_on_mid_screen(gap){
	return [[int(points.length/2 - 1) * gap, points[int(points.length/2 + 1)]*windowHeight],[int(points.length/2) * gap, points[int(points.length/2)]*windowHeight ]]
	
}

function draw() {
	background(0)
	fill(255)
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
	while (points.length < max_points){
		points.push(noise(t))
		t+=0.005;
	}

	noStroke()
	t+=0.001
}