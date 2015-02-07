matrix = [];
biome = ["Empty", "Forest", "Lake", "Desert", "Mountain"];
blockDim = 60;
var dim = 9;
function unitSquare(x,y,b,o,v) {
	this.xCord		= x,
	this.yCord		= y,
	this.biome		= b,
	this.occupied	= o,
	this.visitedc	= v
};
 function createBox(row,col) {
            var tempNode = document.createElement("div");
            tempNode.className = "box";
            tempNode.style.top = row * blockDim + "px";
            tempNode.style.left = col * blockDim + "px";
            tempNode.style.width = tempNode.style.height = blockDim + "px";
            return tempNode;
        }
function randomBiome() {
	return biome[Math.floor(Math.random()*biome.length)];
}

window.onload = function () {
	// calculate width of our game container
var cWidth, cHeight;
if (config.fullScreen === true) {
	cTop = 0;
	cLeft = 0;
	cWidth = getClientWidth()-5;
	cHeight = getClientHeight()-5;
	document.body.style.backgroundColor = "#FC5454";
} else {
	cTop = config.top;
	cLeft = config.left;
	cWidth = config.width;
	cHeight = config.height;
}

var wEdgeSpace = blockDim + "px"*2 + (cWidth % blockDim + "px");
var fWidth = Math.min(dim*blockDim + "px"-wEdgeSpace,cWidth-wEdgeSpace);
var hEdgeSpace = blockDim + "px"*3 + (cHeight % blockDim + "px");
var fHeight = Math.min(dim*blockDim + "px"-hEdgeSpace,cHeight-hEdgeSpace);
	
	for (var row = 0; row < 9; row++) {
		matrix[row] = [];
		for (var col = 0; col < 9; col++) {
			matrix[row][col] = unitSquare(col,row,randomBiome(),false,0);
			document.getElementById("game-area").appendChild(createBox(row,col,matrix[row][col]);
		}
	}
		//TODO
		//document.getElementById("game-area").innerHTML = 
			
	};
