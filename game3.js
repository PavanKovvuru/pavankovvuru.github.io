function preload() {
  this.load.image('bug1', 'https://raw.githubusercontent.com/PavanKovvuru/pavankovvuru.github.io/master/New%20Piskel-1.png%20(6).png')
  this.load.image('platform', 'https://raw.githubusercontent.com/PavanKovvuru/pavankovvuru.github.io/master/New%20Piskel-1.png%20(4).png')
  this.load.image('wall', 'https://raw.githubusercontent.com/PavanKovvuru/pavankovvuru.github.io/master/New%20Piskel-1.png%20(7).png')
  this.load.image('walle', 'https://raw.githubusercontent.com/PavanKovvuru/pavankovvuru.github.io/master/wallewall.png')
  this.load.image('codey', 'https://raw.githubusercontent.com/PavanKovvuru/pavankovvuru.github.io/master/New%20Piskel-1.png%20(3).png')
  this.load.image('snow', 'https://raw.githubusercontent.com/PavanKovvuru/pavankovvuru.github.io/master/snowimage.png')
  this.load.image('invi', 'https://raw.githubusercontent.com/PavanKovvuru/pavankovvuru.github.io/master/invisbloc.png')
}
const gameState = {
score: 0
};

// https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/physics/platform.png
function create() {
// gameState.player = this.physics.add.sprite(200, 10, 'codey').setScale(.5);

  
  const platforms = this.physics.add.staticGroup();
  const walls = this.physics.add.staticGroup();
  const walles = this.physics.add.staticGroup();
	//this.physics.add.sprite(200, mCoord+40, 'codey').setScale(.5);
  walles.create(300, 920, 'walle').setScale(10, 1).refreshBody();
  gameState.player = this.physics.add.sprite(200, 340, 'codey').setScale(.5);
  gameState.player.setCollideWorldBounds(true);
   //this.physics.add.collider(gameState.player, platforms);
  // this.physics.add.collider(gameState.player, walls);
  gameState.cursors = this.input.keyboard.createCursorKeys();

  gameState.scoreText = this.add.text(850, 800, 'Score: 0', { fontSize: '30px', fill: '#000000' });

    // cursors = this.input.keyboard.createCursorKeys();
  //const walls = this.physics.add.group();

    const saCoord = Math.random() * 200;
    //this.camera.follow(player);
    // gameState.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
  const bugs = this.physics.add.group();
  const invis = this.physics.add.group();
  //const snows = this.physics.add.group();
  //function snowGen () {
   // const swCoord = Math.random() * 1900;
    //snows.create(swCoord, 1, 'snow').setScale(.5, .5);
   // this.body.velocity.x = bugs.SPEED;
    // this.body.velocity.x = 80;
   
  //  bugs.SPEED = 100;
   
   // const snowGenLoop = this.time.addEvent({
    //delay: (saCoord)+50,
    //callback: snowGen,
   // callbackScope: this,
  //  loop: true
  // });
  function bugGen () {
    const xCoord = Math.random() * 1900;
    const yCoord = Math.random() * 900;
    bugs.create(xCoord, yCoord, 'bug1');
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
// function inviGen () {
    //const xCoord = Math.random() * 1900;
   // invis.create(30, 850, 'invi');
   // this.body.velocity.x = bugs.SPEED;
    // this.body.velocity.x = 80;
 //  }
  //  bugs.SPEED = 100;
   
   // const inviGenLoop = this.time.addEvent({
   // delay: 300,
  //  callback: inviGen,
  //  callbackScope: this,
  //  loop: true
  // });
  // Add your code below:
 // this.physics.add.collider(snows, snows);
 // this.physics.add.collider(snows, walls);
 // this.physics.add.collider(bugs, walls);
 // this.physics.add.collider(snows, platforms);
  //this.physics.add.collider(snows, bugs);
  //this.physics.add.collider(snows, gameState.player);
 // this.physics.add.collider(bugs, platforms);
  //this.physics.add.collider(invis, walles, function (inv) {
   //inv.destroy();
   // gameState.score -= 10;
  //  gameState.scoreText.setText(`Score: ${gameState.score}`);
  //});
this.physics.add.collider(gameState.player, walles, () => {
   //snow.destroy();
    //gameState.score = 0;
   // gameState.scoreText.setText(`Score: ${gameState.score}`);
    bugGenLoop.destroy();
    snowGenLoop.destroy();
    this.physics.pause();
    this.add.text(700, 320, 'Game Lost', { fontSize: '80px', fill: '#ffffff' });
    this.add.text(680, 450, 'Click to Restart', { fontSize: '50px', fill: '#ffffff' });
   // gameState.scoreText = this.add.text(800, 520, 'Score: ', { fontSize: '50px', fill: '#ffffff' });
   // gameState.scoreText.setText(`Score: ${gameState.score}`);
    
		// Add your code below:
     this.input.on('pointerup', () =>{
     gameState.score = 0;
     gameState.scoreText.setText(`Score: ${gameState.score}`);
     this.scene.restart();
   });
   // gameState.scoreText.setText(`Score: ${gameState.score}`);
  });
  this.physics.add.collider(bugs, gameState.player, function (bug) {
   bug.destroy();
    gameState.score += 10;
    gameState.scoreText.setText(`Score: ${gameState.score}`);
  });
   // gameState.scoreText.setText(`Score: ${gameState.score}`);
  // bugGenLoop.destroy();
   //snowGenLoop.destroy();
   // this.physics.pause();
   // this.add.text(700, 320, 'Game won', { fontSize: '80px', fill: '#ffffff' });
   // this.add.text(680, 450, 'Click to Restart', { fontSize: '50px', fill: '#ffffff' });
   // gameState.scoreText = this.add.text(800, 520, 'Score: ', { fontSize: '50px', fill: '#ffffff' });
  //  gameState.scoreText.setText(`Score: ${gameState.score}`);
		// Add your code below:
    // this.input.on('pointerup', () =>{
    //gameState.score = 0;
   // gameState.scoreText.setText(`Score: ${gameState.score}`);
    // this.scene.restart();
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
    if (gameState.cursors.up.isDown) {
     gameState.player.setVelocityY(-300);
  } else if (gameState.cursors.down.isDown) {
    gameState.player.setVelocityY(300);
    //gameState.bugs.setVelocityX(20);
  }
  
}


const config = {
  type: Phaser.AUTO,
  width: 1900,
  height: 920,
  backgroundColor: "#566061",
  physics: {
    default: 'arcade',
    arcade: {
     // gravity: { y: 500 },
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
