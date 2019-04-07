import Enemy from './enemy'

export default class Enemies {
    constructor(scene, target) {
        this.enemies = [];
        this.target = target;
        this.positions = [[-175,-30], [-150,-50], [-100,-70], [-70, -70], [-40,-70], [-10,-70], [20,-70],
         [50,-70], [80,-70], [110, -70], [150, -50], [175, -30]]
        this.scene = scene;
        this.spawnEnemies();
    }

    spawnEnemies() {
        setInterval(() => {
            let random = Math.floor(Math.random() * 12);
            let position = this.positions[random]
            let enemy = new Enemy(position, this.scene, this.target)
            this.enemies.push(enemy);
        }, 1000);
        // for (let i = 0; i < this.positions.length; i++) {
        //     let enemy = new Enemy(this.positions[i], this.scene);
        //     this.enemies.push(enemy);
        // }
    }

    updateEnemy() {
        this.enemies.forEach((enemy) => {
            enemy.updatePos();
        });
    }
}