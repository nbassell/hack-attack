// import * as THREE from 'three';
import 'three/examples/js/loaders/GLTFLoader';
import { SpotLightHelper } from 'three';

export default class Heart {
  constructor(scene, index) {
    this.scene = scene;
    this.pivot;
    this.heart;
    this.index = index;

    this.startHeart();

    this.drawHeart = this.drawHeart.bind(this);
  }
  
  startHeart() {
    var x = 0, y = 0;

    var loader = new THREE.GLTFLoader();

    loader.load('src/models/heart/scene.gltf', (gltf) => {
      gltf.scene.children[0].scale.set(.1, .1, .1);
      gltf.scene.position.set(103 + 12 * this.index , -65, -100);
      this.scene.add(gltf.scene);

      const spotlight = new THREE.SpotLight(0xffffff);
      spotlight.position.set (0, 1, 1);
      spotlight.power = 2 * Math.PI;
      this.scene.add(spotlight);

      this.heart = gltf.scene.children[0];

      // debugger
    }, undefined, function (error) {

      console.error(error);

    });

    // var heartShape = new THREE.Shape();

    // heartShape.moveTo( x + 5, y + 5 );
    // heartShape.bezierCurveTo( x + 5, y + 5, x + 4, y, x, y );
    // heartShape.bezierCurveTo( x - 6, y, x - 6, y + 7,x - 6, y + 7 );
    // heartShape.bezierCurveTo( x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19 );
    // heartShape.bezierCurveTo( x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7 );
    // heartShape.bezierCurveTo( x + 16, y + 7, x + 16, y, x + 10, y );
    // heartShape.bezierCurveTo( x + 7, y, x + 5, y + 5, x + 5, y + 5 );

    // var geometry = new THREE.ShapeBufferGeometry( heartShape );
    // var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    // var mesh = new THREE.Mesh( geometry, material ) ;
    // material.side = THREE.DoubleSide;

    // var box = new THREE.Box3().setFromObject(mesh);
    // box.getCenter(mesh.position); // this re-sets the mesh position
    // mesh.position.multiplyScalar( - 1 );
    // this.pivot = new THREE.Group();
    // this.scene.add(this.pivot);
    // this.pivot.add(mesh);
    // return this.pivot;
  }

  drawHeart() {
    if (this.heart) {
      this.heart.rotation.z += 0.05;
    }
  }
}