import * as THREE from 'three';

export default class Enemey {
  constructor(position, scene) {
    this.position = position;
    this.scene = scene;
    this.enemy = this.startEnemy();
  }
  
  startEnemy() {

    var loader = new THREE.ObjectLoader();
    loader.load( 'models/enemy.json', (object) => {
      this.scene.add(object);
    });

    // var geometry = new THREE.BoxBufferGeometry(10, 1, 1);
    // var material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
    // var object = new THREE.Mesh( geometry, material );
    object.position.x = this.position[0];
    object.position.y = this.position[1];
    return object;
  }

  updatePos() {
    this.enemy.position.z += 0.5;
  }
}