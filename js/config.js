import GameScene from './scenes/game/game.js';

export const config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: '#0E0E0E',
    scene: [GameScene],
    parent: 'game-container'
};