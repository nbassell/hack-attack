import * as THREE from 'three';
import Player from './player';
import Heart from './heart';
import Enemies from './enemies';

export default class Game {
  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(230, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.playerPos = 50;
    this.camera.position.z = this.playerPos;
    this.player = new Player(this.scene);
    this.heart = new Heart(this.scene);
    this.enemies = new Enemies(this.scene, this.playerPos);
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.scene.background = new THREE.Color(0x000000);
    document.body.appendChild(this.renderer.domElement);
  }


  animate() {
    this.renderer.render(this.scene, this.camera);
    this.update();
  }

  update() {
    this.heart.drawHeart();
    this.enemies.updateEnemy();
    requestAnimationFrame(this.animate.bind(this));
  }
}