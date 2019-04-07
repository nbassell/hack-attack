// import * as THREE from 'three';
import Player from './player';
import Hearts from './hearts';
import Enemies from './enemies';
import Starfield from './starfield';
import Trie from './trie';
import KeyHandler from './key_handler';

export default class Game {
  constructor() {
    this.fieldOfView = 50;
    this.camera = new THREE.PerspectiveCamera(this.fieldOfView, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.scene = new THREE.Scene();
    this.speed = 400;
    this.playerPosition = {x: 0, y: -5, z: -10};
    this.enemyStartPos = -50;
    this.camera.position.z = 0;
    this.player = new Player(this.scene, this.playerPosition);
    this.trie = new Trie();
    this.hearts = new Hearts(this.scene, this.player);
    this.enemies = new Enemies(this.scene, this.speed, this.fieldOfView, this.enemyStartPos, this.playerPosition, this.trie);
    this.trie.addEnemies(this.enemies);
    this.starfield = new Starfield(this.scene);
    this.keyHandler = new KeyHandler();
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.scene.background = new THREE.Color(0x000000);
    document.body.appendChild(this.renderer.domElement);
  }

  checkGuess() {
    if (this.trie.contains(this.keyHandler.guess)) this.keyHandler.guess = "";
    const potentialWords = this.trie.find(this.keyHandler.guess); 
    
  }

  animate() {
    this.renderer.render(this.scene, this.camera);
    this.update();
  }

  update() {
    this.hearts.drawHearts();
    this.enemies.updateEnemy();
    this.starfield.animateStars();
    requestAnimationFrame(this.animate.bind(this));
  }
}