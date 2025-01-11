import { config } from './config.js';

const game = new Phaser.Game(config);

const playButton = document.getElementById("play-pause");
const modeButton = document.getElementById("mode");
const speedSlider = document.getElementById("speed");
const zoomSlider = document.getElementById("zoom");
const gameCanvas = document.querySelector("canvas");

gameCanvas.style.cursor = "crosshair";

function setButtonImage(button, imagePath) {
    const img = button.querySelector("img");
    if (img) img.src = imagePath;
}

playButton.addEventListener("click", () => {
    game.scene.keys.GameScene.isPlaying = !game.scene.keys.GameScene.isPlaying;
    setButtonImage(playButton, `assets/${game.scene.keys.GameScene.isPlaying ? 'pause' : 'play'}.svg`);
});

modeButton.addEventListener("click", () => {
    game.scene.keys.GameScene.isPlaceMode = !game.scene.keys.GameScene.isPlaceMode;
    game.scene.keys.GameScene.isMoveMode = !game.scene.keys.GameScene.isMoveMode;
    setButtonImage(modeButton, `assets/${game.scene.keys.GameScene.isPlaceMode ? 'move' : 'pen'}.svg`);
    gameCanvas.style.cursor = game.scene.keys.GameScene.isPlaceMode ? 'crosshair' : 'move';
});

speedSlider.addEventListener("input", (event) => {
    const value = 500 - event.target.value;
    game.scene.keys.GameScene.deltaTime = value;
    updateSliderStyle(speedSlider);
});

zoomSlider.addEventListener("input", (event) => {
    const value =  parseInt(event.target.value, 10);
    game.scene.keys.GameScene.cellSize = value;
    updateSliderStyle(zoomSlider);
    game.scene.keys.GameScene.drawGrid();
});

function updateSliderStyle(slider) {
    const percentage = (slider.value - slider.min) / (slider.max - slider.min) * 100;
    slider.style.background = `linear-gradient(to right, #082f88 ${percentage}%, #195eff ${percentage}%)`;
}

[speedSlider, zoomSlider].forEach((slider) => updateSliderStyle(slider));