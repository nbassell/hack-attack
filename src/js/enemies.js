import Enemy from './enemy'

export default class Enemies {
    constructor(scene) {
        this.enemies = [];
        this.scene = scene;
        this.spawnEnemies();
    }

    spawnEnemies() {
        setInterval(() => {
            let enemy = new Enemy();
            this.scene.add(enemy.enemy);
            this.enemies.push(enemy);
        }, 1000);
    }

    updateEnemy() {
        this.enemies.forEach((enemy) => {
            enemy.updatePos();
        });
    }
}