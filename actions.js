function Actions() { //arrow keys

    //Movement
    
    function movement(key) {
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
}
function moveLeft() {
    if  (player.x !== 0) {
       if(checkMove) //Thing is not in way
          player.x = player.x - 1;
  }
}
function moveRight() {
    if  (player.x !== length - 1) {
       if(checkMove) 
        player.x = player.x + 1;
}
}
function moveUp() {
    if  (player.y !== 0) {
       if(checkMove) 
          player.y = player.y + 1;
  }
}
function moveDown() {
    if  (player.y !== length - 1) {
       if(checkMove) 
           player.y = player.y - 1;
   }
}

function checkMove(){
   var a = grid[player.x-1][player.y];
    if(a.hasThing) //if the Space has a Thing in it
    {
        a.display();
             if(a.getThing.canStep) //if the player can step over the Thing
                return true;
            return false;
        }
    }