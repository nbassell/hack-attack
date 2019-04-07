import 'three/examples/js/loaders/GLTFLoader';

export default class Player {
  constructor(scene, playerPos) {
    this.scene = scene;
    this.health = 3;
    this.playerPos = playerPos;
    this.startShip();
  }

  isHit() {
    this.health--;
  }

  gameOver() {
    this.health === 0;
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