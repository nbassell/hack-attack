class KeyHandler {
  constructor() {
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.guess = "";
    window.onkeydown = this.handleKeyDown;
  }

  handleKeyDown(e) {
    e.preventDefault();

    if (e.keyCode >= 65 && e.keyCode <= 90) {
      // Alphabet
      // e.key has the alphabet4-094er
      this.guess += e.key;
    } else if ( e.keyCode === 32) {
      // Spacebar
    } else if ( e.keyCode === 27) {
      // Escape

    } else if ( e.keyCode === 15) {
      // Enter
      this.guess = "";
    }
  }
}

export default KeyHandler;