// Need to fix player status
// Need to fix inventory status
// Need to fix dialogue windows

function Player(playerName, startingX, startingY) = {
	
	this.actions =  new Actions();
	this.name = playerName;
	this.x = startingX;
	this.y = startingY;
	//this.charSprite = new Image();
	this.health = 100;
	this.dead = false;
	this.hunger = 0;
	this.thirst = 0;
	this.status = {
		bleeding: false,
		burned: false,
		poisoned: false,
		ill: false
	}
	this.inventory = [];
	for(var i = 0; i < 31; i++) {
		inventory[i] = 0;
	}
	this.dialog = {
		inventory: {
			x: ui.$window.width() - 50, //??
			y: 50,
			w: 50,
			h: 50,
			open: false
		},
		messages: {
			x: 10,
			y: 10,
			w: 10,
			h: 10,
			open: false
		},
		options: {
			x: 10,
			y: 10,
			w: 10,
			h: 10,
			open: false
		}
	}
	
	//Player status (I)
	this.playerStatus = function() {
		var showStatus = "";
		if (this.status.bleeding) {
			showStatus += Messages.isBleeding;
		}
		if (this.status.poisoned) {
			showStatus += Messages.isPoisoned;
		}
		if (this.status.burned) {
			showStatus += Messages.isBurning;
		}
		if (this.status.burned) {
			showStatus += Messages.isIll;
		}
		if (this.health < 10) {
			showStatus += Messages.isNearDeath;
		}
		if (this.hunger >= 50 && this.hunger <= 90) {
			showStatus += Messages.isHungry;
		}
		if (this.hunger >= 90) {
			showStatus += Messages.isStarving;
		}
		if (this.thirst >= 50) {
			showStatus += Messages.isThirsty;
		}
		if (!showStatus) {
			showStatus += Messages.isHealthy;
		}
	}
	
	//Inventory Update
	this.inventoryUpdate = function (itemType, itemQuantity, pickUp) {'
		
		if (pickUp) {
			inventory[itemType] += itemQuantity;
		}
		
			/*
			for(var i  = 0; i < this.inventory.length; i++) {
				if (this.inventory[i] === undefined) {
					this.inventory[i] = itemType;
					break;
				}
				if (this.inventory[length] === itemType) {
					this.inventory[length].quantity += itemQuantity;
			*/
	}
			
};`