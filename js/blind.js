matrix = []
biome = ["Empty" "Forest" "Lake" "Desert" "Mountain"]

function unitSquare(x,y,b,o,v) {
	this.xCord		= x,
	this.yCord		= y,
	this.biome		= b,
	this.occupied	= o,
	this.visitedc	= v
};


function randomBiome() {
	return biome[Math.floor(Math.random()*biome.length)];
}

	window.onload = function () {
		for (var row = 0; row < 9; row++) {
			matrix[row] = [];
			for (var col = 0; col < 9; col++) {
				matrix[row][col] = unitSquare(col,row,randomBiome(),false,0);
			}
		}
			//TODO
			//document.getElementById("game-area").innerHTML = 

		};
