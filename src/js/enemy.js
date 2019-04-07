// import * as THREE from 'three';
import 'three/examples/js/loaders/GLTFLoader';

export default class Enemy {
  constructor(position, scene, speed, playerPos) {
    this.position = position;
    this.scene = scene;
    this.speed = speed;
    this.playerPos = playerPos;
    this.changeX = -1*(this.position[0]/this.speed);
    this.changeY = -1*((this.position[1]-this.playerPos[1])/this.speed);
    this.changeZ = -1*(this.position[2]-this.playerPos[2]) / this.speed;
    
    this.setEnemy = this.setEnemy.bind(this);
    this.startEnemy();
  }
  
  startEnemy() {

    var loader = new THREE.GLTFLoader();
    return loader.load('src/models/player/scene.gltf', this.setEnemy, undefined, function (error) {
      console.error(error);
    });
  }

  setEnemy(enemy) {
    enemy.scene.position.x
    enemy.scene.position.x = this.position[0];
    enemy.scene.position.y = this.position[1];
    enemy.scene.position.z = this.position[2];
    this.scene.add(enemy.scene);
    this.enemy = enemy;
  }

  updatePos() {
    if (this.enemy) {
      this.enemy.scene.position.z += this.changeZ;
      this.enemy.scene.position.x += this.changeX;
      this.enemy.scene.position.y += this.changeY;
    }
  }

}