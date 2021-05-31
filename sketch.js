var rgs = 0;
var rpc = 0;
var database;
var f;
var game;
var player;
var allplayers;
var z;
var y;
var car1;
var car2;
var arr = [];
var carsattheend=0;
function preload() {
  y = loadImage("car1.png");
  z = loadImage("car2.png");
  x = loadImage("track.jpg");
}
function setup() {
  createCanvas(displayWidth, displayHeight);

  database = firebase.database();

  game = new Game();
  game.readgameState();
  game.playthegame();
  car1 = createSprite(300, 300, 10, 10);
  car1.addImage(y);
  car2 = createSprite(300, 350, 10, 10);
  car2.addImage(z);
  arr.push(car1);
  arr.push(car2);
}

function draw() {
  background("white");
  if (rpc === 2) {
    game.writegameState(1);
  }
  if (rgs === 1) {
    game.startthegame();
  }
  //drawSprites();
  if (rgs==2){
game.endgamestate()

  }
}
