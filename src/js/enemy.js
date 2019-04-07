import * as THREE from 'three';

export default class Enemey {
  constructor(position, scene, target) {
    this.position = position;
    this.scene = scene;
    this.target = target;
    this.changeX = -1*(this.position[0]/100);
    this.changeY = -1*(this.position[1]/100)
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
    console.log(object.position.z);
    return object;
  }

  updatePos() {
    this.enemy.position.z += 0.5;
    this.enemy.position.x += this.changeX;
    this.enemy.position.y += this.changeY;
  }

  toZero(num) {
    // if (num > 0) {
    //   return num < 1 ? 0 : num - .7;
    // } else {
    //   return num > -1 ? 0 : num + .7;
    // }
    let change = 0.5 / 50;

  }
}