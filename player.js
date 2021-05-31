class Player {
  constructor() {
    this.name = "";
    this.distance = 0;
    this.position = 0;
    this.rank = null;
  }
  writeplayerCount(b) {
    database.ref("/").update({
      playercount: b,
    });
  }
  readplayerCount() {
    var dataplayer = database.ref("playercount");
    dataplayer.on("value", function (data) {
      rpc = data.val();
    });
  }
  createplayerfield() {
    var p = "allplayers/player" + this.position;
    database.ref(p).set({
      name: this.name,
      distance: this.distance,
    });
  }
  readallplayers() {
    var dp = database.ref("allplayers");
    dp.on("value", function (data) {
      allplayers = data.val();
    });
  }
   readcarsattheend() {
    var dataplayer = database.ref("carsattheend");
    dataplayer.on("value", function (data) {
      carsattheend = data.val();
    });
  }
  writecarsattheend(b) {
    database.ref("/").update({
      carsattheend: b,
    });
  } 
}
//4370 dis value
