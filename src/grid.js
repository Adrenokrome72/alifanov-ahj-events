export default class Grid {
  constructor(containerId) {
    this.grid = document.getElementById(containerId);
    this.cells = [];
    this.createGrid();
  }

  createGrid() {
    for (let i = 0; i < 16; i++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      this.grid.appendChild(cell);
      this.cells.push(cell);
    }
  }

  getRandomCell() {
    return this.cells[Math.floor(Math.random() * this.cells.length)];
  }
}
