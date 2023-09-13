

//const gameState = {};

function preload() {
  this.load.image('bug1', 'https://raw.githubusercontent.com/PavanKovvuru/pavankovvuru.github.io/master/New%20Piskel-1.png%20(6).png')
  this.load.image('platform', 'https://raw.githubusercontent.com/PavanKovvuru/pavankovvuru.github.io/master/New%20Piskel-1.png%20(4).png')
  this.load.image('wall', 'https://raw.githubusercontent.com/PavanKovvuru/pavankovvuru.github.io/master/New%20Piskel-1.png%20(7).png')
  this.load.image('walle', 'https://raw.githubusercontent.com/PavanKovvuru/pavankovvuru.github.io/master/New%20Piskel-1.png%20(7).png')
  this.load.image('codey', 'https://raw.githubusercontent.com/PavanKovvuru/pavankovvuru.github.io/master/New%20Piskel-1.png.png')
  this.load.image('snow', 'https://raw.githubusercontent.com/PavanKovvuru/pavankovvuru.github.io/master/snowimage.png')
}
const gameState = {
  score: 0
};

function create() {
  gameState.player = this.physics.add.sprite(900, 620, 'codey').setScale(.35);

  
  const platforms = this.physics.add.staticGroup();
  const walls = this.physics.add.staticGroup();
  const walles = this.physics.add.staticGroup();


   platforms.create(1100, 680, 'platform').setScale(100, .3).refreshBody();
   walls.create(1894, 595, 'wall').setScale(.3, 1).refreshBody();
   walles.create(5, 595, 'walle').setScale(.3, 1).refreshBody();
  gameState.player.setCollideWorldBounds(true);

   this.physics.add.collider(gameState.player, platforms);
   this.physics.add.collider(gameState.player, walls);
  // Create your cursor object below: 
  gameState.cursors = this.input.keyboard.createCursorKeys();
 


    gameState.scoreText = this.add.text(850, 800, 'Score: 0', { fontSize: '30px', fill: '#ffffff' });

    // cursors = this.input.keyboard.createCursorKeys();

    //this.camera.follow(player);
    // gameState.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
  const srCoord = Math.random() * 100;
  const snows = this.physics.add.group();
  function snowGen () {
    const swCoord = Math.random() * 2400;
    snows.create(swCoord-500, 1, 'snow').setScale(.7, .7);
   // this.body.velocity.x = bugs.SPEED;
    // this.body.velocity.x = 80;
   }

   
    const snowGenLoop = this.time.addEvent({
    delay: (srCoord)+40,
    callback: snowGen,
    callbackScope: this,
    loop: true
   });
  const bugs = this.physics.add.group();
  
  function bugGen () {
    const xCoord = Math.random() * 550;
    bugs.create(xCoord-20, 650, 'bug1');
   // this.body.velocity.x = bugs.SPEED;
    // this.body.velocity.x = 80;
   }

   
    const bugGenLoop = this.time.addEvent({
    delay: 1000,
    callback: bugGen,
    callbackScope: this,
    loop: true
   });

  this.physics.add.collider(snows, platforms);
  this.physics.add.collider(bugs, platforms);
  this.physics.add.collider(bugs, walls, function (bug) {
   bug.destroy();
    gameState.score += 1;
    gameState.scoreText.setText(`Score: ${gameState.score}`);
  });
  this.physics.add.collider(snows, walls, function (snow) {
   snow.destroy();
   // gameState.score += 10;
   // gameState.scoreText.setText(`Score: ${gameState.score}`);
  });

    this.physics.add.collider(gameState.player, bugs, () => {
    bugGenLoop.destroy();
    snowGenLoop.destroy();
    this.physics.pause();
    this.add.text(700, 220, 'Game Over', { fontSize: '80px', fill: '#ffffff' });
    this.add.text(680, 350, 'Click to Restart', { fontSize: '50px', fill: '#ffffff' });
    

     this.input.on('pointerup', () =>{
    gameState.score = 0;
     this.scene.restart();
    });
  });
    this.physics.add.collider(gameState.player, walles, () => {
    bugGenLoop.destroy();
    snowGenLoop.destroy();
    this.physics.pause();
    this.add.text(700, 220, 'Game Over', { fontSize: '80px', fill: '#ffffff' });
    this.add.text(680, 350, 'Click to Restart', { fontSize: '50px', fill: '#ffffff' });
    

     this.input.on('pointerup', () =>{
    gameState.score = 0;
     this.scene.restart();
    });
  });

//this.cursors = this.input.keyboard.addKeys(
//{up:Phaser.Input.Keyboard.KeyCodes.W,
//down:Phaser.Input.Keyboard.KeyCodes.S,
//left:Phaser.Input.Keyboard.KeyCodes.A,
//right:Phaser.Input.Keyboard.KeyCodes.D});
}
function update() {
   //player.body.setZeroVelocity();
  // Add your conditional statements below:
    if (gameState.cursors.left.isDown) {
    gameState.player.setVelocityX(-210);
  } else if (gameState.cursors.right.isDown) {
    gameState.player.setVelocityX(200);
    //gameState.bugs.setVelocityX(20);
  } else {
    gameState.player.setVelocityX(10);
  }
    if ((gameState.cursors.space.isDown || 
     gameState.cursors.up.isDown)&& gameState.player.body.touching.down) {
     gameState.player.setVelocityY(-400);
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
      gravity: { y: 500, x: 200 },
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
