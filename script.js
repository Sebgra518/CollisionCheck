var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//Shift + Alt + F to clean up code

function Block() {
  this.posX = 100;
  this.posY = 100;
  this.width = 20;
  this.height = 20;
  this.color = "rgba(255,0,0,1)";

  this.setProperties = function (x, y, w, h, c) {
    this.posX = x;
    this.posY = y;
    this.width = w;
    this.height = h;
    this.color = c; //"rgba(255,0,0,1)"
  };
}

const Player = {
  posX: 0,
  posY: 15,
  width: 20,
  height: 20,
  xVelocity: 0,
  yVelocity: 0,

  gravity: function () {
    Player.yVelocity += 0.01;
    Player.posY += Player.yVelocity + 0.01;
  },

  moveRight: function () {
    Player.posX += Player.xVelocity + 1;
  },

  moveUp: function () {
    Player.posY += Player.yVelocity - 1;
  },

  moveLeft: function () {
    Player.posX += Player.xVelocity - 1;
  },

  moveDown: function () {
    Player.posY += Player.yVelocity + 1;
  },
};

function makeBlocks(n) {
  var blocks = new Array(n);
  for (var i = 0; i < n; i++) {
    blocks[i] = new Block();
  }
  return blocks;
}
function rgba(r, g, b, a) {
  return "rgba(" + r + "," + g + "," + b + "," + a + ")";
}
function drawBlock(arg) {
  ctx.beginPath();
  ctx.rect(arg.posX, arg.posY, arg.width, arg.height);
  ctx.fillStyle = arg.color;
  ctx.fill();
}
function drawAllBlocks() {
  for (var i = 0; i < blocks.length; i++) {
    drawBlock(blocks[i]);
  }
}

function drawPlayer() {
  ctx.beginPath();
  ctx.rect(Player.posX, Player.posY, Player.width, Player.height);
  ctx.fillStyle = "black";
  ctx.fill();
}

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

var blocks = makeBlocks(3);

blocks[0].setProperties(10, 50, 50, 20, rgba(255, 0, 0, 1));
blocks[1].setProperties(190, 100, 50, 20, rgba(0, 255, 0, 1));
blocks[2].setProperties(100, 75, 50, 20, rgba(0, 0, 255, 1));

setInterval(function () {
  clear();
  drawPlayer();
  drawAllBlocks();
}, 10);

document.addEventListener("keydown", function (event) {
  //Right
  if (event.keyCode === 39) {
    Player.moveRight();
  }

  //up
  if (event.keyCode === 38) {
    Player.moveUp();
  }

  //left
  if (event.keyCode === 37) {
    Player.moveLeft();
  }

  //down
  if (event.keyCode === 40) {
    Player.moveDown();
  }
});
