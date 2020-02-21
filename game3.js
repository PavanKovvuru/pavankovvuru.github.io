const gameState = {};
//var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {

this.load.image('play', 'https://raw.githubusercontent.com/PavanKovvuru/pavankovvuru.github.io/master/New%20Piskel-1.png%20(3).png')
    
}

var flyer;

function create() {

   const game.physics.startSystem(Phaser.Physics.ARCADE);

    const cursors = game.input.keyboard.createCursorKeys();

    const flyer = game.add.sprite(400, 200, 'play');

   // flyer.animations.add('left', [0, 1, 2, 3], 10, true);
   // flyer.animations.add('right', [5, 6, 7, 8], 10, true);

    game.physics.enable(flyer, Phaser.Physics.ARCADE);
    
    //  This gets it moving
     flyer.body.velocity.setTo(200, 200);
    
    //  This makes the game world bounce-able
    flyer.body.collideWorldBounds = true;
    
    //  This sets the image bounce energy for the horizontal 
    //  and vertical vectors (as an x,y point). "1" is 100% energy return
     flyer.body.bounce.setTo(0.8, 0.8);

}

//  Change the vertical and horizontal acceleration property accordingly with the key pressed
//  Also turn on and off the animation. Dude should have wings ;)

function update () {

    if (cursors.up.isDown)
    {
        flyer.body.acceleration.y = -600;

      //  if (flyer.body.velocity.x > 0)
      //  {
       //     flyer.animations.play('right');
       // }
        else
       // {
       //     flyer.animations.play('left');
       // }
    }
    else if (cursors.down.isDown)
    {
        flyer.body.acceleration.y = 600;

       // if (flyer.body.velocity.x > 0)
       // {
       //     flyer.animations.play('right');
       // }
       // else
      //  {
        //    flyer.animations.play('left');
        //}
    }
    else if (cursors.left.isDown)
    {
        flyer.body.acceleration.x = -500;
       // flyer.animations.play('left');
    }
    else if (cursors.right.isDown)
    {
        flyer.body.acceleration.x = 500;
        //flyer.animations.play('right');
    }
    else
    {
       // flyer.frame = 4;
        flyer.body.acceleration.setTo(0,0);
       // flyer.animations.stop();
    }
    
}

//function render () {

    //debug helper
    //game.debug.spriteInfo(flyer,32,32);

//}
const config = {
  type: Phaser.AUTO,
  width: 1900,
  height: 920,
  backgroundColor: "#566061",
  physics: {
    default: 'arcade',
    arcade: {
      //gravity: { y: 500 },
      enableBody: true,
    }
  },
  scene: {
    preload,
    create,
    update
  }
};
const game = new Phaser.Game(config);
