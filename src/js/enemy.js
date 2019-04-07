import * as THREE from 'three';

export default class Enemy {
  constructor(position, scene, speed) {
    this.position = position;
    this.scene = scene;
    this.speed = speed;
    this.changeX = -1*(this.position[0]/this.speed);
    this.changeY = -1*(this.position[1]/this.speed)
    this.enemy = this.startEnemy();
  }
  
  startEnemy() {

    // var loader = new THREE.ObjectLoader();
    // var object = loader.load( 'models/enemy.json', (object) => {
    //   this.scene.add(object);
    // });

    var geometry = new THREE.BoxBufferGeometry(1, 1, 0.5);
    var material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
    var object = new THREE.Mesh( geometry, material );
    object.position.x = this.position[0];
    object.position.y = this.position[1];
    this.scene.add(object);
    console.log(object.position.z);
    return object;
  }

  updatePos() {
    this.enemy.position.z += 50/this.speed;
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