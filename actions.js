function Actions() { //arrow keys

   function movement(key) {
    switch(key.keycode) 
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
function Actions() {
    
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
    function moveLeft() {
        if  (player.x !== 0) {
            player.x = player.x - 1;
        }
    }
    function moveRight() {
        if  (player.x !== length - 1) {
            player.x = player.x + 1;
        }
    }
    function moveUp() {
        if  (player.y !== 0) {
            player.y = player.y + 1;
        }
    }
    function moveDown() {
        if  (player.y !== length - 1) {
            player.y = player.y - 1;
        }
    }
}