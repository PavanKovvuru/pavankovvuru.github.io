
const gameState = {};

function preload() {
  this.load.image('bug1', 'https://raw.githubusercontent.com/PavanKovvuru/pavankovvuru.github.io/master/New%20Piskel-1.png%20(6).png')
  this.load.image('platform', 'https://raw.githubusercontent.com/PavanKovvuru/pavankovvuru.github.io/master/New%20Piskel-1.png%20(4).png')
  this.load.image('wall', 'https://raw.githubusercontent.com/PavanKovvuru/pavankovvuru.github.io/master/New%20Piskel-1.png%20(7).png')
  this.load.image('codey', 'https://raw.githubusercontent.com/PavanKovvuru/pavankovvuru.github.io/master/New%20Piskel-1.png%20(3).png')
}
//const gameState = {
//score: 0
//};

// https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/physics/platform.png
function create() {
  gameState.player = this.physics.add.sprite(200, 650, 'codey').setScale(.5);

  
  const platforms = this.physics.add.staticGroup();
 // const walls = this.physics.add.staticGroup();
  const yCoord = Math.random() * 900;
  const qCoord = Math.random() * 900;
  const wCoord = Math.random() * 900;
  const eCoord = Math.random() * 900;
  const rCoord = Math.random() * 900;
  const tCoord = Math.random() * 900;
  const uCoord = Math.random() * 900;
  const iCoord = Math.random() * 900;
  const oCoord = Math.random() * 900;
  const pCoord = Math.random() * 900;
  const aCoord = Math.random() * 900;
  const sCoord = Math.random() * 900;
   platforms.create(225, 680, 'platform').setScale(1, .3).refreshBody();
   platforms.create(500, yCoord, 'platform').setScale(.05, .3).refreshBody();
   platforms.create(600, qCoord, 'platform').setScale(.05, .3).refreshBody();
   platforms.create(700, wCoord, 'platform').setScale(.05, .3).refreshBody();
   platforms.create(800, eCoord, 'platform').setScale(.05, .3).refreshBody();
   platforms.create(900, rCoord, 'platform').setScale(.05, .3).refreshBody();
   platforms.create(1000, tCoord, 'platform').setScale(.05, .3).refreshBody();
   platforms.create(1100, uCoord, 'platform').setScale(.05, .3).refreshBody();
   platforms.create(1200, iCoord, 'platform').setScale(.05, .3).refreshBody();
   platforms.create(1300, oCoord, 'platform').setScale(.05, .3).refreshBody();
   platforms.create(1400, pCoord, 'platform').setScale(.05, .3).refreshBody();
   platforms.create(1500, aCoord, 'platform').setScale(.05, .3).refreshBody();
   platforms.create(1600, sCoord, 'platform').setScale(.05, .3).refreshBody();
   platforms.create(1900, 680, 'platform').setScale(1, .3).refreshBody();
  // walls.create(1850, 595, 'wall').setScale(.3, 1).refreshBody();
  gameState.player.setCollideWorldBounds(true);
  
  const walls = this.physics.add.group();

  function wallGen () {
   // const xCoord = Math.random() * 1900;
    walls.create(1850, 595, 'wall');
   }
   this.physics.add.collider(gameState.player, platforms);
  // this.physics.add.collider(gameState.player, walls);
  // Create your cursor object below: 
  gameState.cursors = this.input.keyboard.createCursorKeys();
  //  game.world.setBounds(0, 0, 1920, 1920);

   // player = game.add.sprite(game.world.centerX, game.world.centerY, 'codey');
    //gameState.scoreText = this.add.text(850, 800, 'Score: 0', { fontSize: '30px', fill: '#000000' });

    // cursors = this.input.keyboard.createCursorKeys();

    //this.camera.follow(player);
    // gameState.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
  const bugs = this.physics.add.group();

  function bugGen () {
    const xCoord = Math.random() * 1900;
    bugs.create(xCoord, 10, 'bug1');
   // this.body.velocity.x = bugs.SPEED;
    // this.body.velocity.x = 80;
   }
  //  bugs.SPEED = 100;
   
    const bugGenLoop = this.time.addEvent({
    delay: 10000,
    callback: bugGen,
    callbackScope: this,
    loop: true
   });
  // Add your code below:
  this.physics.add.collider(bugs, platforms);
  this.physics.add.collider(bugs, platforms, function (bug) {
   bug.destroy();
   // gameState.score += 0;
    //gameState.scoreText.setText(`Score: ${gameState.score}`);
  });

this.physics.add.collider(gameState.player, bugs, () => {
   bugGenLoop.destroy();
    this.physics.pause();
    this.add.text(700, 220, 'Game Lost', { fontSize: '80px', fill: '#ffffff' });
    this.add.text(680, 350, 'Click to Restart', { fontSize: '50px', fill: '#ffffff' });
    
		// Add your code below:
     this.input.on('pointerup', () =>{
    //gameState.score += 1;
    //gameState.scoreText.setText(`Score: ${gameState.score}`);
     this.scene.restart();
   });
  });
this.physics.add.collider(gameState.player, walls, () => {
   bugGenLoop.destroy();
    this.physics.pause();
    this.add.text(700, 220, 'Game Won', { fontSize: '80px', fill: '#ffffff' });
    this.add.text(680, 350, 'Click to Restart', { fontSize: '50px', fill: '#ffffff' });
    
		// Add your code below:
     this.input.on('pointerup', () =>{
    //gameState.score += 1;
    //gameState.scoreText.setText(`Score: ${gameState.score}`);
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
    //gameState.bugs.setVelocityX(20);
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
