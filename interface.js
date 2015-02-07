

var size = 10;
var grid = new Array(size);

for(var i = 0; i < size; i++)
{
	grid[i] = new Array(size);
   for(var j = 0; j < size; j++)
   {
		grid[i][j] = new Space(i, j);
		document.getElementById(''); //add Space to grid
   }
}

var n = document.getElementById('North'),
s = document.getElementById('South'),
e = document.getElementById('East'),
w = document.getElementById('West');

n.addEventListener('keydown', moveUp());
s.addEventListener('keydown', moveDown());
e.addEventListener('keydown', moveRight());
w.addEventListener('keydown', moveLeft());
