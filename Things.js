//generate grid and put all things on it. display as the player moves around
function Thing(name, locationX, locationY, canStep) { //things to put on grid
	this.name = name;
	this.x = locationX;
	this.y = locationY;
	this.canStep = canStep; //can player be at same location?
	this.display = false; //does the thing appear on the grid?
	this.img = new Image();
	this.img.src = "images/" + this.name +".png";
	
	//methods
	this.destroy = function(){ //destroys thing/breaks it down so that player can step over it
	this.canStep = true;
	}
	this.display = function(){ //display on grid
	this.appear = true;

	}
}

function Tree(locationX, locationY){ //can't step over trees. can destroy for wood
	this.name = "Tree";
	this.x = locationX;
	this.y = locationY;
	this.canStep = false; 
}

function Rock(locationX, locationY){ //the rock
	this.name = "Rock";
	this.x = locationX;
	this.y = locationY;
	this.canStep = false;
}

function Twig(locationX, locationY){ //pick-up able
	this.name = "Twig";
	this.x = locationX;
	this.y = locationY;
	this.canStep = true;
}

Tree.prototype = new Thing();
Rock.prototype = new Thing();
Twig.prototype = new Thing();