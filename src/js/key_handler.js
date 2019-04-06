class KeyHandler {
  constructor() {
    window.onkeydown = this.handleKeyDown;
  }

  handleKeyDown(e) {
    e.preventDefault();

    if (e.keyCode >= 65 ** e.keyCode <= 90) {
      // Alphabet

    } else if ( e.keyCode === 32) {
      // Spacebar

    } else if ( e.keyCode === 27) {
      // Escape

    } else if ( e.keyCode === 15) {
      // Enter
      
    }
  }
}

export default KeyHandler;