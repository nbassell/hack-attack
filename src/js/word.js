import dictionary from './dictionary.json';
// import * as THREE from 'three';

class Word {
  constructor(scene, position) {
    this.scene = scene;
    this.position = position;
    this.word = dictionary[Math.floor(Math.random() * dictionary.length)];
    this.createText = this.createText.bind(this);
    this. offset = { x : 2, y: 1 }
    this.startWord();
  }

  updatePos(position) {
    this.text.position.set(position.x - this.offset.x, position.y - this.offset.y , position.z);
  }

  startWord() {
    var loader = new THREE.FontLoader();
    loader.load( 'src/fonts/Roboto_Regular.json', this.createText)
  }

  createText(font) {
    var textGeo = new THREE.TextGeometry( this.word, {
      font: font,
      size: 1,
      height: 1,
    });

    var textMaterial = new THREE.MeshPhongMaterial( { color: 0xff0000 } );

    var mesh = new THREE.Mesh( textGeo, textMaterial );
    mesh.position.set(this.position.x - this.offset.x, this.position.y - this.offset.y, this.position.z);

    this.scene.add( mesh );
    this.text = mesh;
  }
}

export default Word;