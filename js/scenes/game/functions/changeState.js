import { drawGrid } from "./drawGrid.js";

export function changeState(pos, state) {
    let cell = this.cells.find(c => c.x === pos.x && c.y === pos.y);

    if (!cell) {
        cell = { x: pos.x, y: pos.y, isAlive: false };
        this.cells.push(cell);
    }

    if (cell.isAlive === state) return;
    cell.isAlive = state;

    drawGrid.call(this);
}