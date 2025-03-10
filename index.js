const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [PreloadScene, GameScene, UIScene],
    physics: {
      default: 'arcade',
      arcade: { debug: false }
    }
  };
  
  const game = new Phaser.Game(config);