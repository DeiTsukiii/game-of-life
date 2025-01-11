export function update() {
    function getNeighbors(cell) {
        return [
            { x: cell.x - 1, y: cell.y - 1 }, { x: cell.x, y: cell.y - 1 }, { x: cell.x + 1, y: cell.y - 1 },
            { x: cell.x - 1, y: cell.y },                                   { x: cell.x + 1, y: cell.y },
            { x: cell.x - 1, y: cell.y + 1 }, { x: cell.x, y: cell.y + 1 }, { x: cell.x + 1, y: cell.y + 1 }
        ];
    }

    function nextGeneration() {
        const newCells = [];
        const cellsToEvaluate = new Set();

        this.cells.forEach(cell => {
            cellsToEvaluate.add(`${cell.x},${cell.y}`);
            getNeighbors(cell).forEach(neighbor => {
                cellsToEvaluate.add(`${neighbor.x},${neighbor.y}`);
            });
        });

        const cellsArray = Array.from(cellsToEvaluate).map(coord => {
            const [x, y] = coord.split(',').map(Number);
            const existingCell = this.cells.find(c => c.x === x && c.y === y);
            return existingCell || { x, y, isAlive: false };
        });

        cellsArray.forEach(cell => {
            const neighbors = getNeighbors(cell);
            const aliveNeighbors = neighbors.filter(neighbor => 
                this.cells.some(c => c.x === neighbor.x && c.y === neighbor.y && c.isAlive)
            ).length;

            if (cell.isAlive) {
                if (aliveNeighbors === 2 || aliveNeighbors === 3) {
                    newCells.push({ ...cell, isAlive: true });
                }
            } else if (aliveNeighbors === 3) {
                newCells.push({ ...cell, isAlive: true });
            }
        });

        this.cells = newCells;
        this.drawGrid();
    }

    const currentTime = Date.now();
    if (currentTime - this.lastGenTime >= this.deltaTime && this.isPlaying) {
        nextGeneration.call(this);
        this.lastGenTime = currentTime;
    }
}