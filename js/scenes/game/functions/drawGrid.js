export function drawGrid() {
    const { graphics, offsetX, offsetY, cellSize, cells } = this;

    const canvasWidth = this.scale.width;
    const canvasHeight = this.scale.height;

    const startX = Math.floor((-offsetX) / cellSize) * cellSize;
    const endX = Math.ceil((canvasWidth - offsetX) / cellSize) * cellSize;

    const startY = Math.floor((-offsetY) / cellSize) * cellSize;
    const endY = Math.ceil((canvasHeight - offsetY) / cellSize) * cellSize;

    graphics.clear();

    for (let x = startX; x <= endX; x += cellSize) {
        graphics.lineBetween(
            x + offsetX,
            startY + offsetY,
            x + offsetX,
            endY + offsetY
        );
    }

    for (let y = startY; y <= endY; y += cellSize) {
        graphics.lineBetween(
            startX + offsetX,
            y + offsetY,
            endX + offsetX,
            y + offsetY
        );
    }

    cells.forEach((cell) => {
        const cellX = cell.x * cellSize + offsetX;
        const cellY = cell.y * cellSize + offsetY;

        if (
            cellX + cellSize >= 0 &&
            cellX <= canvasWidth &&
            cellY + cellSize >= 0 &&
            cellY <= canvasHeight
        ) {
            const color = cell.isAlive ? 0xF1F1F1 : 0x0E0E0E;
            graphics.fillStyle(color, 1);
            graphics.fillRect(cellX, cellY, cellSize, cellSize);
        }
    });
}