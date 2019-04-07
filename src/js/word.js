import dictionary from './dictionary.json';
// import * as THREE from 'three';

class Word {
  constructor(scene, position) {
    this.scene = scene;
    this.position = position;
    this.word = dictionary[Math.floor(Math.random() * dictionary.length)];
    this.createText = this.createText.bind(this);

    this.startWord();
  }

  updatePos(position) {
    this.text.position.set(position.x, position.y, position.z);
  }

  startWord() {
    // console.log(this.word);
    // let geometry  = new THREE.TextGeometry(this.word )
    // var textMaterial = new THREE.MeshPhongMaterial( { color: 0xff0000 } );

    // var text = new THREE.Mesh( geometry, textMaterial );
    // text.position.x = this.position.x;
    // text.position.y = this.position.y;
    // text.position.z = this.position.z;
    // this.scene.add(text)
    // this.text = text;
    var loader = new THREE.FontLoader();

    loader.load( 'src/fonts/Roboto_Regular.json', this.createText)
  }

  createText(font) {
    var textGeo = new THREE.TextGeometry( this.word, {
      font: font,
      size: 1,
      height: 5,
      // curveSegments: 12,
      // bevelThickness: 2,
      // bevelSize: 5,
      // bevelEnabled: true
    });

    var textMaterial = new THREE.MeshPhongMaterial( { color: 0xff0000 } );

    var mesh = new THREE.Mesh( textGeo, textMaterial );
    mesh.position.set(this.position.x, this.position.y, this.position.z);

    this.scene.add( mesh );
    this.text = mesh;
  }
}

export default Word;