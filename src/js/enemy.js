import * as THREE from 'three';

export default class Enemey {
  constructor() {
    this.enemy = this.startEnemy();
  }
  
  startEnemy() {


    var geometry = new THREE.BoxBufferGeometry(3, 1, 1);
    var material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
    var mesh = new THREE.Mesh( geometry, material ) ;
    return mesh;
  }

  updatePos() {
    this.enemy.position.z += 0.5;
  }
}