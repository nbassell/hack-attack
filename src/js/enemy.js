// import * as THREE from 'three';
import 'three/examples/js/loaders/GLTFLoader';

export default class Enemy {
  constructor(position, scene, speed, playerPos) {
    this.position = position;
    this.scene = scene;
    this.speed = speed;
    this.playerPos = playerPos;
    this.changeX = -1 * (this.position.x / this.speed);
    this.changeY = -1 * ((this.position.y - this.playerPos.y) / this.speed);
    this.changeZ = -1 * (this.position.z - this.playerPos.z) / this.speed;
    
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
    enemy.scene.position.x = this.position.x;
    enemy.scene.position.y = this.position.y;
    enemy.scene.position.z = this.position.z;
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