import * as THREE from 'three';
import Player from './player';
import Heart from './heart';

export default class Game {
  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.player = new Player();
    this.heart = new Heart();
    this.scene.add(this.heart.heart);
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.scene.background = new THREE.Color( 0x000000 );
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