//generate grid and put all things on it. display as the player moves around
function Thing(name, locationX, locationY, canStep) { //things to put on grid
	this.name = name;
	this.x = locationX;
	this.y = locationY;
	this.canStep = canStep; //can player be at same location?
	this.onGrid = false; //does the thing appear on the grid?
	
	//methods
	this.destroy = function(){ //destroys thing/breaks it down so that player can step over it
	canStep = true;
	}
	this.display = function(){ //display on grid
	appear = true;
	}
}

function Tree(locationX, locationY){ //can't step over trees. can destroy for wood
	this.name = "Tree";
	this.x = locationX;
	this.y = locationY;
	canStep = false;
}

Tree.prototype = new Thing();