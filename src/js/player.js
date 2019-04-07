import 'three/examples/js/loaders/GLTFLoader';
import Hearts from './hearts';

export default class Player {
  constructor(scene, playerPos, game) {
    this.scene = scene;
    this.health = 3;
    this.playerPos = playerPos;
    this.game = game;

    this.startShip();
    this.hearts = new Hearts(this.scene, this.health);
  }

  isHit() {
    this.health--;
    this.hearts.health--;
    const object = this.scene.getObjectByName(`${this.health}`);
    this.scene.remove(object);

    if(this.health <= 0) this.game.gameOver();
  }

  update() {
    this.hearts.drawHearts();
  }

  startShip() {
    var loader = new THREE.GLTFLoader();
  
    loader.load('src/models/player/scene.gltf', (ship) => {
      ship.scene.rotation.y = 3.15;
      ship.scene.position.z = this.playerPos.z;
      ship.scene.position.y = this.playerPos.y;
      return this.scene.add(ship.scene);
  
    }, undefined, function (error) {
  
      console.error(error);
    });
  }
}