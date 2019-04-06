export default class Player {
  constructor(scene, camera) {
    this.scene = scene;
    this.camera = camera;
    this.health = 3;
  }

  isHit() {
    this.health--;
  }

  gameOver() {
    this.health === 0;
  }

}