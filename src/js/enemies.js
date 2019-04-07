import Enemy from './enemy';

export default class Enemies {
    constructor(scene, speed, view, startPos, playerPos, trie) {
        this.enemies = new Set();
        this.speed = speed;
        this.startPos = startPos;
        this.playerPos = playerPos;
        this.view = view;
        this.positions = this.setPositions();
        this.scene = scene; 
        this.trie = trie;
        this.spawnEnemies();
    }

    setPositions() {
        let positions = []
        for (let i = 10; i >= -10; i -= 10) {
            positions.push({x: this.view-5, y: i, z: this.startPos});
            positions.push({x: -1 * this.view + 5, y: i, z: this.startPos});
        }
        for (let i = this.view; i >= this.view * -1; i -= this.view / 10) {
            positions.push({x: i, y: Math.floor(this.view / 3), z: this.startPos});
        }
        return positions;
    }

    spawnEnemies() {
        console.log(this.positions)
        setInterval(() => {
            let random = Math.floor(Math.random() * this.positions.length);
            let position = this.positions[random]
            let enemy = new Enemy(position, this.scene, this.speed, this.playerPos, this.trie);
            this.enemies.add(enemy);
        }, 1000);
    }

    deleteEnemy(enemy, word) {
        const object = this.scene.getObjectByName(word);
        this.scene.remove(object);

        this.enemies.delete(enemy);
        // debugger
    }

    updateEnemy() {
        this.enemies.forEach((enemy) => {
            enemy.updatePos();
        });
    }
}