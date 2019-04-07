import Enemy from './enemy';

export default class Enemies {
    constructor(scene, speed, view, startPos, playerPos) {
        this.enemies = [];
        this.speed = speed;
        this.startPos = startPos;
        this.playerPos = playerPos;
        this.view = view;
        this.positions = this.setPositions();
        this.scene = scene; 
        this.spawnEnemies();
    }

    setPositions() {
        let positions = []
        for (let i = 10; i >= -10; i -= 10) {
            positions.push([this.view-5, i, this.startPos]);
            positions.push([-1*this.view+5, i, this.startPos]);
        }
        for (let i = this.view; i >= this.view*-1; i -= this.view/10) {
            positions.push([i, Math.floor(this.view/3), this.startPos])
        }
        return positions;
    }

    spawnEnemies() {
        console.log(this.positions)
        setInterval(() => {
            let random = Math.floor(Math.random() * this.positions.length);
            let position = this.positions[random]
            let enemy = new Enemy(position, this.scene, this.speed, this.playerPos)
            this.enemies.push(enemy);
        }, 500);
    }

    deleteEnemy() {
        this.scene.remove(this.enemies[0].enemy);
        this.enemies = this.enemies.splice(1);
    }

    updateEnemy() {
        this.enemies.forEach((enemy) => {
            enemy.updatePos();
        });
    }
}