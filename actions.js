function Actions {
	
	this.addEventListener('keydown', movement);
	
	function movement(key) {
        key = key || window.event;
		switch(key.keycode) {
			case 37:
			moveLeft();
			case 39:
			moveRight();
			case 38:
			moveUp();
			case 41:
			moveDown();
		}
	}
		
	function moveLeft() {
		player.x = player.x - 1;
	}

	function moveRight() {
		player.x = player.x + 1;
	}

	function moveUp() {
		player.x = player.y + 1;
	}

	function moveDown() {
		player.x = player.y - 1;
	}
}