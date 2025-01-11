export function create() {
    this.graphics = this.add.graphics({ lineStyle: { width: 1, color: 0x444444 } });
    this.offsetX = this.scale.width / 2;
    this.offsetY = this.scale.height / 2;

    this.input.on('pointerdown', (pointer) => this.clickHandler(pointer));    

    this.input.on('pointerup', () => this.dragging = false);

    this.input.on('pointermove', (pointer) => {
        if (this.dragging && this.isMoveMode) {
            const deltaX = pointer.x - this.lastX;
            const deltaY = pointer.y - this.lastY;

            this.offsetX += deltaX;
            this.offsetY += deltaY;

            this.lastX = pointer.x;
            this.lastY = pointer.y;

            this.drawGrid();
        }
    });

    const urlParams = new URLSearchParams(window.location.search);
    this.offsetX = (parseInt(urlParams.get('x')) || 0) * this.cellSize + this.scale.width / 2;
    this.offsetY = (parseInt(urlParams.get('y')) || 0) * this.cellSize + this.scale.height / 2;

    this.drawGrid();
}