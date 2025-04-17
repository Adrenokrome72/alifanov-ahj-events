import Grid from './grid.js';
import Goblin from './goblin.js';

export default class Game {
  constructor() {
    this.grid = new Grid('grid');
    this.goblin = new Goblin(this.grid, () => this.handleScore(), () => this.handleMiss());
    this.score = 0;
    this.misses = 0;
    this.intervalId = null;
    this.isGameOver = false;
  }

  start() {
    if (!this.isGameOver) {
      this.intervalId = setInterval(() => {
        this.goblin.appear();
      }, 1100);
    }
  }

  handleScore() {
    if (this.isGameOver) return;
    this.score++;
    document.getElementById('score').textContent = `Очки: ${this.score}`;
    this.goblin.appear();
  }

  handleMiss() {
    if (this.isGameOver) return;
    this.misses++;
    document.getElementById('misses').textContent = `Пропуски: ${this.misses}`;
    if (this.misses >= 5) {
      this.endGame();
    } else {
      this.goblin.appear();
    }
  }

  endGame() {
    this.isGameOver = true;
    clearInterval(this.intervalId);
    this.goblin.disappear();
    const endMessage = document.createElement('div');
    endMessage.className = 'end-message';
    endMessage.textContent = `Игра окончена! Очки: ${this.score}`;
    document.body.appendChild(endMessage);
  }
}
