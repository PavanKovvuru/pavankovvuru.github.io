
const gameState = {};

function preload() {
  this.load.image('bug1', 'https://raw.githubusercontent.com/PavanKovvuru/pavankovvuru.github.io/master/New%20Piskel-1.png%20(6).png')
  this.load.image('platform', 'https://raw.githubusercontent.com/PavanKovvuru/pavankovvuru.github.io/master/New%20Piskel-1.png%20(4).png')
  this.load.image('wall', 'https://raw.githubusercontent.com/PavanKovvuru/pavankovvuru.github.io/master/New%20Piskel-1.png%20(7).png')
  this.load.image('codey', 'https://raw.githubusercontent.com/PavanKovvuru/pavankovvuru.github.io/master/New%20Piskel-1.png%20(3).png')
  this.load.image('snow', 'https://raw.githubusercontent.com/PavanKovvuru/pavankovvuru.github.io/master/New%20Piskel-1.png.png')
}
//const gameState = {
//score: 0
//};

// https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/physics/platform.png
function create() {
// gameState.player = this.physics.add.sprite(200, 10, 'codey').setScale(.5);

  
  const platforms = this.physics.add.staticGroup();
 // const walls = this.physics.add.staticGroup();
  const mCoord = Math.random() * 850;
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
  const dCoord = Math.random() * 900;
  const fCoord = Math.random() * 900;
  const gCoord = Math.random() * 900;
  const hCoord = Math.random() * 900;
  const jCoord = Math.random() * 900;
  const kCoord = Math.random() * 900;
  const lCoord = Math.random() * 900;
  const zCoord = Math.random() * 900;
  const xCoord = Math.random() * 900;
  const cCoord = Math.random() * 900;
  const vCoord = Math.random() * 900;
  const bCoord = Math.random() * 900;
   platforms.create(225, mCoord+50, 'platform').setScale(1, .3).refreshBody();
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
   platforms.create(550, dCoord, 'platform').setScale(.05, .3).refreshBody();
   platforms.create(650, fCoord, 'platform').setScale(.05, .3).refreshBody();
   platforms.create(750, gCoord, 'platform').setScale(.05, .3).refreshBody();
   platforms.create(850, hCoord, 'platform').setScale(.05, .3).refreshBody();
   platforms.create(950, jCoord, 'platform').setScale(.05, .3).refreshBody();
   platforms.create(1050, kCoord, 'platform').setScale(.05, .3).refreshBody();
   platforms.create(1150, lCoord, 'platform').setScale(.05, .3).refreshBody();
   platforms.create(1250, zCoord, 'platform').setScale(.05, .3).refreshBody();
   platforms.create(1350, xCoord, 'platform').setScale(.05, .3).refreshBody();
   platforms.create(1450, cCoord, 'platform').setScale(.05, .3).refreshBody();
   platforms.create(1550, vCoord, 'platform').setScale(.05, .3).refreshBody();
   platforms.create(1650, bCoord, 'platform').setScale(.05, .3).refreshBody();
   platforms.create(1950, 680, 'platform').setScale(1, .3).refreshBody();
   platforms.create(225, mCoord+50, 'platform').setScale(1, .3).refreshBody();
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
   platforms.create(550, dCoord, 'platform').setScale(.05, .3).refreshBody();
   platforms.create(650, fCoord, 'platform').setScale(.05, .3).refreshBody();
   platforms.create(750, gCoord, 'platform').setScale(.05, .3).refreshBody();
   platforms.create(850, hCoord, 'platform').setScale(.05, .3).refreshBody();
   platforms.create(950, jCoord, 'platform').setScale(.05, .3).refreshBody();
   platforms.create(1050, kCoord, 'platform').setScale(.05, .3).refreshBody();
   platforms.create(1150, lCoord, 'platform').setScale(.05, .3).refreshBody();
   platforms.create(1250, zCoord, 'platform').setScale(.05, .3).refreshBody();
   platforms.create(1350, xCoord, 'platform').setScale(.05, .3).refreshBody();
   platforms.create(1450, cCoord, 'platform').setScale(.05, .3).refreshBody();
   platforms.create(1550, vCoord, 'platform').setScale(.05, .3).refreshBody();
   platforms.create(1650, bCoord, 'platform').setScale(.05, .3).refreshBody();
   platforms.create(1950, 680, 'platform').setScale(1, .3).refreshBody();
  // walls.create(1850, 595, 'wall').setScale(.3, 1).refreshBody();
  gameState.player = this.physics.add.sprite(200, mCoord-40, 'codey').setScale(.5);
//  gameState.player.setCollideWorldBounds(true);
   this.physics.add.collider(gameState.player, platforms);
  // this.physics.add.collider(gameState.player, walls);
  // Create your cursor object below: 
  gameState.cursors = this.input.keyboard.createCursorKeys();
  //  game.world.setBounds(0, 0, 1920, 1920);

   // player = game.add.sprite(game.world.centerX, game.world.centerY, 'codey');
    //gameState.scoreText = this.add.text(850, 800, 'Score: 0', { fontSize: '30px', fill: '#000000' });

    // cursors = this.input.keyboard.createCursorKeys();
  const walls = this.physics.add.group();

  function wallGen () {
   // const xCoord = Math.random() * 1900;
    walls.create(1850, 595, 'wall');
   }
	
    const wallGenLoop = this.time.addEvent({
    delay: 1000000,
    callback: wallGen,
    callbackScope: this,
    loop: true
   });
    const saCoord = Math.random() * 200;
    //this.camera.follow(player);
    // gameState.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
  const bugs = this.physics.add.group();
  const snows = this.physics.add.group();
  function snowGen () {
    const swCoord = Math.random() * 1900;
    snows.create(swCoord, 1, 'snow').setScale(.5, .5);
   // this.body.velocity.x = bugs.SPEED;
    // this.body.velocity.x = 80;
   }
  //  bugs.SPEED = 100;
   
    const snowGenLoop = this.time.addEvent({
    delay: (saCoord)+50,
    callback: snowGen,
    callbackScope: this,
    loop: true
   });
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
  this.physics.add.collider(snows, snows);
  this.physics.add.collider(snows, platforms);
  this.physics.add.collider(snows, gameState.player);
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
     gameState.player.setVelocityY(-300);
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
