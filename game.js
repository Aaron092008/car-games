class Game {
  constructor() {}
  readgameState() {
    var gamedata = database.ref("gamestate");
    gamedata.on("value", function (data) {
      rgs = data.val();
    });
  }
  writegameState(a) {
    database.ref("/").update({
      gamestate: a,
    });
  }
  playthegame() {
    if (rgs == 0) {
      f = new Form();
      player = new Player();
      player.readplayerCount();
      f.Display();
    }
  }

  startthegame() {
    console.log("game inside");

    player.readallplayers();
    player.readcarsattheend()
    f.button.hide();
    f.inputbox.hide();
    f.greeting.hide();
    f.heading.hide();
    var i = 0;
    var h = 350;
    image(x, 0, -displayHeight * 5, displayWidth, displayHeight * 6);
    for (var p in allplayers) {
      arr[i].x = h;
      arr[i].y = displayHeight - allplayers[p].distance;

      h = h + 550;
      if (i + 1 == player.position) {
        camera.position.x = displayWidth / 2;
        camera.position.y = arr[i].y;
      }
      i = i + 1;
    }
    drawSprites();
    if (keyDown(UP_ARROW)) {
      player.distance = 10 + player.distance;
      player.createplayerfield();
      
    }
    if (player.distance>4330){
player.rank=carsattheend+1
player.writecarsattheend(player.rank)
rgs=2

    }
  }
  endgamestate(){
  alert("KUDOS YOU ARE IN THE " + player.rank +" POSITION" )


  }
}
