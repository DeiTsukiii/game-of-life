import { changeState } from "./functions/changeState.js";
import { clickHandler } from "./functions/clickHandler.js";
import { drawGrid } from "./functions/drawGrid.js";

import { create } from "./functions/create.js";
import { update } from "./functions/update.js";

export default class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene');
        
        // Initialisation des propriétés
        this.cellSize = 20;
        this.cells = [];
        this.deltaTime = 60;
        this.lastGenTime = Date.now();
        this.dragging = false;
        this.lastX = 0;
        this.lastY = 0;
        this.isPlaying = false;
        this.isMoveMode = false;
        this.isPlaceMode = true;
    }    

    preload() {
        this.load.svg('pause_icon', 'assets/play.svg');
        this.load.svg('play_icon', 'assets/pause.svg');
        this.load.svg('move_icon', 'assets/move.svg');
        this.load.svg('place_icon', 'assets/pen.svg');
    }    

    drawGrid() {
        drawGrid.call(this);
    }

    changeState(pos, state) {
        changeState.call(this, pos, state);
    }

    clickHandler(pointer) {
        clickHandler.call(this, pointer);
    }

    create() {
        create.call(this);
    }

    update() {
        update.call(this);
    }
}