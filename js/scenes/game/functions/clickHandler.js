export function clickHandler(pointer) {
    if (this.isMoveMode) {
        this.dragging = true;
        this.lastX = pointer.x;
        this.lastY = pointer.y;
    } else if (this.isPlaceMode) {
        const x = Math.floor((pointer.x - this.offsetX) / this.cellSize);
        const y = Math.floor((pointer.y - this.offsetY) / this.cellSize);
        const cell = this.cells.find(c => c.x === x && c.y === y);
        if (cell) {
            this.changeState({ x, y }, !cell.isAlive);
        } else {
            this.changeState({ x, y }, true);
        }
    }
}