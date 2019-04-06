class TrieNode {
  constructor(letter) {
    this.letter = letter;
    this.isWord = false;
    this.children = {};
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode(null);
  }

  insert(word) {
    let currentNode = this.root;

    for (let letter of word) {
      if (!currentNode.children[letter]) {
        currentNode.children[letter] = new TrieNode(letter);
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