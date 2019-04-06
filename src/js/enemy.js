import * as THREE from 'three';

export default class Enemey {
  constructor(position, scene) {
    this.position = position;
    this.scene = scene;
    this.enemy = this.startEnemy();
  }
  
  startEnemy() {

    // var loader = new THREE.ObjectLoader();
    // var object = loader.load( 'models/enemy.json', (object) => {
    //   this.scene.add(object);
    // });

    var geometry = new THREE.BoxBufferGeometry(1, 1, 3);
    var material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
    var object = new THREE.Mesh( geometry, material );
    object.position.x = this.position[0];
    object.position.y = this.position[1];
    this.scene.add(object);
    return object;
  }

  updatePos() {
    this.enemy.position.z += 0.5;
  }
}