import goblinImage from './assets/goblin.png';

export default class Goblin {
  constructor(grid, onScore, onMiss) {
    this.image = new Image();
    this.image.src = goblinImage;
    this.grid = grid;
    this.onScore = onScore;
    this.onMiss = onMiss;
    this.currentCell = null;
    this.lastCell = null;
    this.timeoutId = null;
    this.canScore = true;

    this.image.addEventListener('click', () => {
      if (this.currentCell && this.canScore) {
        clearTimeout(this.timeoutId);
        this.canScore = false;
        this.disappear();
        this.onScore();
      }
    });
  }

  appear() {
    if (this.currentCell) {
      return;
    }
    let newCell;
    do {
      newCell = this.grid.getRandomCell();
    } while (newCell === this.lastCell);
    this.currentCell = newCell;
    this.lastCell = newCell;
    this.currentCell.appendChild(this.image);
    this.canScore = true;
    this.timeoutId = setTimeout(() => {
      this.disappear();
      this.onMiss();
    }, 1000);
  }

  disappear() {
    if (this.currentCell) {
      this.currentCell.removeChild(this.image);
      this.currentCell = null;
    }
    clearTimeout(this.timeoutId);
  }
}
