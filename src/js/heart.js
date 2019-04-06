import * as THREE from 'three';

export default class Heart {
  constructor() {
    this.heart = this.startHeart();
  }
  
  startHeart() {
    var x = 50, y = 50;
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
    var center = new THREE.Vector3();
    mesh.geometry.computeBoundingBox();
    mesh.geometry.boundingBox.getCenter(center);
    mesh.geometry.center();
    mesh.position.copy(center);
    // geometry.center();
    return mesh;
  }

  drawHeart() {
    this.heart.rotation.y += 0.05;
  }
}