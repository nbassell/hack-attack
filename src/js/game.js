import * as THREE from 'three';
import Player from './player';
import Heart from './heart';
import Enemies from './enemies';

export default class Game {
  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(230, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 50;
    this.player = new Player(this.scene);
    this.heart = new Heart(this.scene);
    this.scene.add(this.heart.heart);
    this.enemies = new Enemies(this.scene);
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
    requestAnimationFrame(this.animate.bind(this));
  }
}