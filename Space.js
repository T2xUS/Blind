function Space(locationX, locationY) { 
	this.x = locationX;
	this.y = locationY;
	
	this.calcThing = function(){ //to add thing to Space or not
		var a = Math.floor(Math.random()*10 + 1); //generate a random number from 1 to 10
		
		if(a == 8) //10% chance of creating a tree
		{
			 this.hasThing = true; //this Space contains a Thing
			 this.getThing = new Tree(locationX, locationY); //create a tree
			 
		}
		if(a == 9)
		{
			 this.hasThing = true; //this Space contains a Thing
			 this.getThing = new Twig(locationX, locationY); //create a Twig
		}
		else
			this.hasThing = false;
	}	
}


