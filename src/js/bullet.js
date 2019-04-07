import 'three/examples/js/loaders/GLTFLoader';

export default class Bullet {
  constructor(scene, startPos, endPos) {
    this.scene = scene;
    this.startPos = startPos;
    this.endPos = endPos;

    this.startBullet();
    // this.drawHeart = this.drawHeart.bind(this);
  }
  
  startBullet() {

    // var loader = new THREE.GLTFLoader();

    // loader.load('src/models/heart/scene.gltf', (gltf) => {
    //   gltf.scene.children[0].scale.set(.1, .1, .1 );
    //   gltf.scene.position.set(62 + 11 * this.index , -45, -100);
    //   gltf.scene.name = `${this.index}`
    //   this.scene.add(gltf.scene);

    //   const spotlight = new THREE.PointLight(0xffffff);
    //   spotlight.position.set (1, 1, 1);
    //   spotlight.power = 2 * Math.PI;
    //   this.scene.add(spotlight);

    //   this.heart = gltf.scene.children[0];
    // }, undefined, function (error) {
    //   console.error(error);
    // });
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( {color: 0x0000ff} );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
  }

  drawHeart() {
    if (this.heart) {
      this.heart.rotation.z += 0.05;
    }
  }
}