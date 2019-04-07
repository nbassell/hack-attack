import Heart from './heart';

export default class Hearts {
  constructor(scene, player) {
    this.hearts = [];
    this.scene = scene;
    this.player = player;
    this.spawnHearts();
  }

  spawnHearts() {
    for (let i = 0; i < this.player.health; i++) {
      let heart = new Heart(this.scene);
      this.hearts.push(heart);
    }
  }

  
}