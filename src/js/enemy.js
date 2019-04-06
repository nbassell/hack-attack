import * as THREE from 'three';

export default class Heart {
  constructor() {
    this.enemy = this.enemy();
  }
  
  startHeart() {


    var geometry = new THREE.ShapeBufferGeometry( heartShape );
    var material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
    var mesh = new THREE.Mesh( geometry, material ) ;
    return mesh;
  }

  updatePos() {
    this.enemy.rotation.x += 0.01;
  }
}