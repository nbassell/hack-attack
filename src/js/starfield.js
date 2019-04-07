class Starfield {
  constructor(scene) {
    this.scene = scene;
    this.stars = [];

    this.addSphere();
  }

  addSphere() {
    // var geometry = new THREE.Geometry();
    // var material = new THREE.PointsMaterial({ color: 0xffffff });
    var geometry = new THREE.SphereGeometry(0.5, 32, 32)
    var material = new THREE.MeshBasicMaterial({ color: 0xffffff });

    for (let z = -1000; z < 1000; z += 20) {
      // var star = new THREE.Vector3();
      var sphere = new THREE.Mesh(geometry, material)

      sphere.position.x = Math.random() * 1000 - 500;
      sphere.position.y = Math.random() * 1000 - 500;
      sphere.position.z = z;

      // geometry.vertices.push(star);
      this.scene.add(sphere);
      this.stars.push(sphere);
    }

    // var starfield = new THREE.Points(geometry, material);

    // this.scene.add(starfield);
  }

  animateStars() {
    for (let i = 0; i < this.stars.length; i++) {
      const star = this.stars[i];

      // star.set(star.x, star.y, star.z + i / 10);
      star.position.z += i / 10;
      if (star.position.z > 1000) star.position.z -= 2000;
    }
  }
}

export default Starfield;