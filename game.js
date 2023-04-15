export class Game extends Phaser.Scene {


    

    constructor(){
        super({key: 'game'})
    }

    preload ()
    {

        this.load.image('character', './assets/image/character.png');
        this.load.image('background', './assets/image/background.png');
         this.load.image('enemy', './assets/image/enemy.png');
         this.load.image('weapon', './assets/image/weapon.png');
    }
 
     create ()
    {
        this.add.image(400, 300, 'background');

        


        this.platform = this.physics.add.image(400, 450, 'character');
        this.platform.body.allowGravity= false;
        this.platform.setCollideWorldBounds(true);

        this.cursors = this.input.keyboard.createCursorKeys();

        

        // var particles = this.add.particles('red');

        // var emitter = particles.createEmitter({
        //     speed: 100,
        //     scale: { start: 1, end: 0 },
        //     blendMode: 'ADD'
        // });

        // var logo = this.physics.add.image(400, 100, 'logo');

        // logo.setVelocity(100, 200);
        // logo.setBounce(1, 1);
        // logo.setCollideWorldBounds(true);

        // emitter.startFollow(logo);
    }

    update ()

    {
        if(this.cursors.left.isDown) {
        this.platform.setAngle(-20);
        this.platform.setVelocityX(-300);
        }else if (this.cursors.right.isDown) {
        this.platform.setAngle(20);
        this.platform.setVelocityX(300);
        }else {
        this.platform.setAngle(0);
        this.platform.setVelocityX(0);
        }

    }
    
}