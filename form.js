class Form {
  constructor() {
    this.heading = createElement("h1");
    this.inputbox = createInput("Username");
    this.button = createButton("Register");
    this.greeting = createElement("h1");
  }

  Display() {
    this.heading.html("WELCOME TO THE WORLD OF SPEED");
    this.heading.position(displayWidth - 700, displayHeight - 700);
    this.inputbox.position(displayWidth - 600, displayHeight - 500);
    this.button.position(displayWidth - 600, displayHeight - 400);
    this.button.mousePressed(() => {
      this.inputbox.hide();
      this.button.hide();

      player.name = this.inputbox.value();

      this.greeting.position(250, 459);
      this.greeting.html("Hello " + player.name);

      rpc = rpc + 1;
      player.position = rpc;
      console.log(rpc);
      player.writeplayerCount(rpc);
      player.createplayerfield();
    });
  }
}
