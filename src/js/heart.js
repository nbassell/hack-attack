import * as THREE from 'three';

export default class Heart {
  constructor(scene) {
    this.scene = scene;
    this.pivot;
    this.heart = this.startHeart();
  }
  
  startHeart() {
    var x = 0, y = 0;
    var heartShape = new THREE.Shape();

    heartShape.moveTo( x + 5, y + 5 );
    heartShape.bezierCurveTo( x + 5, y + 5, x + 4, y, x, y );
    heartShape.bezierCurveTo( x - 6, y, x - 6, y + 7,x - 6, y + 7 );
    heartShape.bezierCurveTo( x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19 );
    heartShape.bezierCurveTo( x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7 );
    heartShape.bezierCurveTo( x + 16, y + 7, x + 16, y, x + 10, y );
    heartShape.bezierCurveTo( x + 7, y, x + 5, y + 5, x + 5, y + 5 );

    var geometry = new THREE.ShapeBufferGeometry( heartShape );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var mesh = new THREE.Mesh( geometry, material ) ;
    material.side = THREE.DoubleSide;

    var box = new THREE.Box3().setFromObject(mesh);
    box.getCenter(mesh.position); // this re-sets the mesh position
    mesh.position.multiplyScalar( - 1 );
    this.pivot = new THREE.Group();
    this.scene.add(this.pivot);
    this.pivot.add(mesh);

    this.pivot.position.set(-100,100,-200)
    
    return this.pivot;
  }

  drawHeart() {
    this.pivot.rotation.y += 0.05;
  }
}