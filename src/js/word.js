import dictionary from './dictionary.json';

class Word {
  constructor(scene, position) {
    this.scene = scene;
    this.position = position;
    this.word = dictionary[Math.floor(Math.random * dictionary.length)];
  }

  updatePos(position) {
    this.position = position;
  }
}

export default Word;