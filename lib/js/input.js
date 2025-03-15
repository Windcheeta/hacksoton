function mousePressed() {
	if (isLooping()) {
		noLoop()
	} else {
		loop()
	}
}

function keyPressed() {
	if ( keyCode == 32 ) { // space
		save("cellularAutomata")
	}
	if ( keyCode == 82 ) { // r
		WORLD = WORLD.map( x => int(random(COLS)) )
	}
	if (keyCode == 78) { // n 
		genRules()
	}
}