export class GameOver extends Phaser.Scene {
  constructor() {
    super("gameover");
  }

  preload() {
    this.load.image("background", "./assets/image/background.png");
    this.load.image("restart", "./assets/image/restart.png");
    this.load.audio ( "gameOverSong", "./assets/audio/gameOverSong.mp3");
    this.load.audio ( "victorySong", "./assets/audio/VictorySong.mp3");
  }

  create(data) {
    //ADD BACKGROUND
    this.add.image(400, 300, "background");
    //add text gameover

    this.gameOverSong = this.sound.add("gameOverSong");
    this.victorySong = this.sound.add("victorySong");
    

    if (data.score < 10000) {
      this.add
        .text(
          this.game.config.width / 2,
          this.game.config.height / 2 - 100,
          "JUEGO TERMINADO",
          { fontSize: "32px", fill: "#fff" }
        )
        .setOrigin(0.5, 0.5);

        this.gameOverSong.play();
    } else if (data.score >= 10000 && data.score < 100000) {
      this.add
        .text(
          this.game.config.width / 2,
          this.game.config.height / 2 - 100,
          "Felicidades",
          { fontSize: "32px", fill: "#fff" }
        )
        .setOrigin(0.5, 0.5);
        this.gameOverSong.play();
    } else if (data.score >= 100000) {
      this.add
        .text(
          this.game.config.width / 2,
          this.game.config.height / 2 - 100,
          "¡¡WOW!!",
          { fontSize: "32px", fill: "#fff" }
        )
        .setOrigin(0.5, 0.5);

        this.victorySong.play();
    }
    this.add
      .text(
        this.game.config.width / 2,
        this.game.config.height / 2,
        "Tus puntos:" + data.score,
        { fontSize: "32px", fill: "#fff" }
      )
      .setOrigin(0.5, 0.5);

    this.add
      .text(
        this.game.config.width / 2,
        this.game.config.height / 2 + 100,
        "Presiona la tecla R para reiniciar",
        { fontSize: "20px", fill: "#fff" }
      )
      .setOrigin(0.5, 0.5);

    this.keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
  }

  update() {
    if (this.keyR.isDown) {
      this.scene.start("game");
      this.gameOverSong.stop ();
      this.victorySong.stop();
    }
  }
}
