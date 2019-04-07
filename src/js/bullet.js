import 'three/examples/js/loaders/GLTFLoader';

export default class Bullet {
  constructor(scene, startPos, endPos, speed) {
    this.scene = scene;
    this.startPos = startPos;
    this.endPos = endPos;
    this.speed = speed;
    this.changeX = (this.endPos.x - this.startPos.x) / this.speed*10; 
    this.changeY = (this.endPos.y - this.startPos.y) / this.speed*10; 
    this.changeZ = (this.endPos.z - this.startPos.z) / this.speed*10; 

    this.startBullet();
    this.createBullet = this.createBullet.bind(this);
  }
  
  startBullet() {
    var loader = new THREE.GLTFLoader();

    loader.load('src/models/bullet/scene.gltf', (bullet) => {
        bullet.scene.children[0].scale.set(.01, .01, .01 );
        bullet.scene.lookAt( this.endPos.x, this.endPos.y, this.endPos.z );
        bullet.scene.position.set(this.startPos.x, this.startPos.y, this.startPos.z);
        this.scene.add( bullet.scene );
        this.bullet = bullet;

        const spotlight = new THREE.PointLight(0xffffff);
        spotlight.position.set (1, 1, 1);
        spotlight.power = 2 * Math.PI;
        this.scene.add(spotlight);
    }, undefined, function (error) {
      console.error(error);
    });
  }

  createBullet(bullet) {
    bullet.scene.lookAt( this.endPos.x, this.endPos.y, this.endPos.z );
    bullet.scene.position.set(this.startPos.x, this.startPos.y, this.startPos.z);
    this.scene.add( bullet.scene );
    this.bullet = bullet;

    const spotlight = new THREE.PointLight(0xffffff);
    spotlight.position.set (1, 1, 1);
    spotlight.power = 2 *+ Math.PI;
    this.scene.add(spotlight);
  }

  updatePos() {
      if (this.bullet) {
          this.bullet.scene.position.x += this.changeX;
          this.bullet.scene.position.y += this.changeY;
          this.bullet.scene.position.z += this.changeZ;
      } else {
          console.log(this.bullet)
      }
  }
}