// import * as THREE from 'three';
import 'three/examples/js/loaders/GLTFLoader';

export default class Enemy {
  constructor(position, scene, speed) {
    this.position = position;
    this.scene = scene;
    this.speed = speed;
    this.changeX = -1*(this.position[0]/this.speed);
    this.changeY = -1*(this.position[1]/this.speed)
    
    this.setEnemy = this.setEnemy.bind(this);
    this.startEnemy();
  }
  
  startEnemy() {

    var loader = new THREE.GLTFLoader();
    return loader.load('src/models/player/scene.gltf', this.setEnemy, undefined, function (error) {
      console.error(error);
    });

    // var geometry = new THREE.BoxBufferGeometry(1, 1, 0.5);
    // var material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
    // var object = new THREE.Mesh( geometry, material );
    // object.position.x = this.position[0];
    // object.position.y = this.position[1];
    // object.position.z = -54;
    // this.scene.add(object);
    // return object;
  }

  setEnemy(enemy) {
    enemy.scene.position.x
    enemy.scene.position.x = this.position[0];
    enemy.scene.position.y = this.position[1];
    enemy.scene.position.z = -54;
    this.scene.add(enemy.scene);
    this.enemy = enemy;
  }

  updatePos() {
    if (this.enemy) {
      this.enemy.scene.position.z += 50/this.speed;
      this.enemy.scene.position.x += this.changeX;
      this.enemy.scene.position.y += this.changeY;
    }
  }

}