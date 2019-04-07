import * as THREE from 'three';
import Player from './player';
import Heart from './heart';
import Enemies from './enemies';
import KeyHandler from './key_handler';

export default class Game {
  constructor() {
    this.scene = new THREE.Scene();
    this.fieldOfView = 50;
    this.camera = new THREE.PerspectiveCamera(this.fieldOfView, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.speed = 200;
    this.camera.position.z = 0;
    this.player = new Player(this.scene);
    this.heart = new Heart(this.scene);
    this.enemies = new Enemies(this.scene, this.speed, this.fieldOfView);
    // this.keyHandler = new KeyHandler(this.enemies);
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
    this.hearts.forEach(heart => heart.drawHeart());
    this.enemies.updateEnemy();
    requestAnimationFrame(this.animate.bind(this));
  }
}