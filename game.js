

const gameState = {}

function preload() {
  this.load.image('bug1', 'https://raw.githubusercontent.com/PavanKovvuru/pavankovvuru.github.io/master/New%20Piskel-1.png%20(6).png')
  this.load.image('bug2', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/physics/bug_2.png')
  this.load.image('bug3', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/physics/bug_3.png')
  this.load.image('platform', 'https://raw.githubusercontent.com/PavanKovvuru/pavankovvuru.github.io/master/New%20Piskel-1.png%20(4).png')
  this.load.image('wall', 'https://raw.githubusercontent.com/PavanKovvuru/pavankovvuru.github.io/master/New%20Piskel-1.png%20(7).png')
  this.load.image('codey', 'https://raw.githubusercontent.com/PavanKovvuru/pavankovvuru.github.io/master/New%20Piskel-1.png%20(3).png')
}
//const gameState = {
//  score: 0
//};

// https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/physics/platform.png
function create() {
  gameState.player = this.physics.add.sprite(225, 450, 'codey').setScale(.5);

  
  const platforms = this.physics.add.staticGroup();
  const walls = this.physics.add.staticGroup();

   platforms.create(225, 520, 'platform').setScale(1, .3).refreshBody();
   platforms.create(400, 680, 'platform').setScale(1, .3).refreshBody();
   platforms.create(800, 680, 'platform').setScale(1, .3).refreshBody();
   platforms.create(1100, 680, 'platform').setScale(1, .3).refreshBody();
   platforms.create(1500, 680, 'platform').setScale(1, .3).refreshBody();
   platforms.create(1800, 680, 'platform').setScale(1, .3).refreshBody();
   platforms.create(1900, 680, 'platform').setScale(1, .3).refreshBody();
  gameState.player.setCollideWorldBounds(true);

   this.physics.add.collider(gameState.player, platforms);
  
  // Create your cursor object below: 
  gameState.cursors = this.input.keyboard.createCursorKeys();
  //  game.world.setBounds(0, 0, 1920, 1920);

   // player = game.add.sprite(game.world.centerX, game.world.centerY, 'codey');
  //  gameState.scoreText = this.add.text(195, 485, 'Score: 0', { fontSize: '15px', fill: '#000000' });

    // cursors = this.input.keyboard.createCursorKeys();

    //this.camera.follow(player);
    // gameState.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
  const bugs = this.physics.add.group();
  
  function bugGen () {
    //const xCoord = Math.random() * 450;
    bugs.create(50, 400, 'bug1');
    this.body.velocity.x = bugs.SPEED;
   }
    bugs.SPEED = 10;
   
    const bugGenLoop = this.time.addEvent({
    delay: 1000,
    callback: bugGen,
    callbackScope: this,
    loop: true
   });
  
  // Add your code below:
  this.physics.add.collider(bugs, platforms);
  this.physics.add.collider(bugs, walls, function (bug) {
   bug.destroy();
 //   gameState.score += 10;
  //  gameState.scoreText.setText(`Score: ${gameState.score}`);
  });
    this.physics.add.collider(gameState.player, bugs, () => {
    bugGenLoop.destroy();
    this.physics.pause();
    this.add.text(180, 250, 'Game Over', { fontSize: '50px', fill: '#ffffff' });
    this.add.text(152, 270, 'Click to Restart', { fontSize: '50px', fill: '#ffffff' });
    
		// Add your code below:
     this.input.on('pointerup', () =>{
   //  gameState.score = 0;
     this.scene.restart();
    });
  });

}

function update() {
   //player.body.setZeroVelocity();
  // Add your conditional statements below:
    if (gameState.cursors.left.isDown) {
    gameState.player.setVelocityX(-200);
  } else if (gameState.cursors.right.isDown) {
    gameState.player.setVelocityX(200);
  } else {
    gameState.player.setVelocityX(0);
  }
    if ((gameState.cursors.space.isDown || 
     gameState.cursors.up.isDown)&& gameState.player.body.touching.down) {
     gameState.player.setVelocityY(-400);
  }
}
//function render() {

  //  game.debug.cameraInfo(game.camera, 225, 450);

//}

const config = {
  type: Phaser.AUTO,
  width: 1900,
  height: 920,
  backgroundColor: "#566061",
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 500 },
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
