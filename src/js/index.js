import Game from './game';
import Trie from './trie';

document.addEventListener('DOMContentLoaded', () => {

  window.trie = new Trie();

  const game = new Game();
  game.animate();
});