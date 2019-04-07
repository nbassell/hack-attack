import Word from "./word";

class TrieNode {
  constructor(letter) {
    this.letter = letter;
    this.isWord = false;
    this.children = {};
    this.words = new Set();
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode(null);
  }

  insert(word, enemy) {
    let currentNode = this.root;

    // const wordNode = enemy.word;

    for (let letter of word) {
      if (!currentNode.children[letter]) {
        currentNode.children[letter] = new TrieNode(letter);
        // currentNode.words.add(wordNode);
      }
      currentNode = currentNode.children[letter];
    }

    currentNode.isWord = true;

    return this.root;
  }

  contains(word) {
    let currentNode = this.root;

    for (let letter of word) {
      if (currentNode.children[letter]) {
        currentNode = currentNode.children[letter];
      } else {
        return false;
      }
    }

    return currentNode.isWord;
  }

  find(prefix) {
    let currentNode = this.root;

    for(let letter of prefix) {
      if (currentNode.children[letter]) {
        currentNode = currentNode.children[letter];
      } else {
        return {};
      }
    }

    return currentNode.children;
  }

  delete(word) {
    const backtrack = (currentNode = this.root, index = 0) => {
      if (index === word.length) {
        if (!currentNode.isWord) return false;

        currentNode.isWord = false;
        return Object.keys(currentNode.children).length === 0;
      }

      const letter = word[index];
      const nextNode = currentNode.children[letter];

      if (!nextNode) return false;

      const shouldDelete = backtrack(nextNode, index + 1) && !nextNode.isWord;

      if (shouldDelete) {
        delete currentNode.children[letter];
        return Object.keys(currentNode.children).length === 0;
      }

      return false;
    }

    return backtrack();
  }
}

export default Trie;