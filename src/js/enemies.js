import Enemy from './enemy'

export default class Enemies {
    constructor(scene) {
        this.enemies = [];
        this.positions = [[-10,-10], [-10,0], [-10,10], [0, -10], [0,0], [0,10], [10,-10], [10,0], [10,10]]
        this.scene = scene;
        this.spawnEnemies();
    }

    spawnEnemies() {
        setInterval(() => {
            let random = Math.floor(Math.random() * 9);
            let position = this.positions[random]
            let enemy = new Enemy(position, this.scene)
            this.enemies.push(enemy);
        }, 1000);
    }

    updateEnemy() {
        this.enemies.forEach((enemy) => {
            enemy.updatePos();
        });
    }
}