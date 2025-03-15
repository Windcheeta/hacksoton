SIZE = 1000
WORLD = []
RULES = new Map()
HEIGHT = 2
//COLARRAY = [ '#00429d', '#2e59a8', '#5d8abd', '#8abccf', '#c5eddf', '#ffffe0']
COLARRAY = [ '#9B1616', '#AA1D7B', '#BD5DB9', '#F0BFF4', '#FFFFFF']
WRAP = true

function genRules() {
	for (let i = 0; i < COLS ** 3; i++) {
		setRandRule(i)
		//print( i + ":" + RULES.get(i) )
	}
}

function setRandRule(i) {
	//RULES.set(i, min( int(random(COLS)), int(i / COLS ** 2) + 1 ) )
	//RULES.set(i, int(random(COLS)))
	RULES.set(i,  int(random() ** 2 * COLS) )
	//RULES.set(i, int( noise(i, frameCount) * COLS )  )
}

function setup() {
	cnv = createCanvas(windowWidth, windowHeight);
	COLS = COLARRAY.length
	background(100);
	WORLD = Array(SIZE).fill(0).map(_ => int(random(COLS)))
	//print(WORLD)
	genRules()
	noStroke()
	frameRate(1000)
}

function draw() {
	translate(0, -HEIGHT)
	image(cnv, 0, 0)
	newGeneration()
	drawGen()
}

function drawGen() {
	for (let j = 0; j < SIZE; j++){
		fill( COLARRAY[WORLD[j]] )
		rect(j * width / SIZE, height, width / SIZE, HEIGHT)
	}
}

function newGeneration() {
	wCopy = [...WORLD]
	let ind
	for (let i = 0; i < SIZE; i++) {
		let parents = 0
		dontSkip = true
		for (let j = 0; j <= 2; j++) {
			ind = i + j - 1
			if (ind >= 0 && ind < SIZE) {
				parents += wCopy[ ind ] * (COLS ** (2 - j))
			} else if (WRAP) {
				parents += wCopy[ (ind + SIZE) % SIZE ]
			} else {
				dontSkip = false
				break
			}
		}
		if (dontSkip) {
			WORLD[i] = RULES.get(parents)
		}
	}
}