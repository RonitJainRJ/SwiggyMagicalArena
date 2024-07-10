const Player = require('./player');
const { rollDie } = require('./utils');

class Game {
    constructor(playerA, playerB) {
        this.playerA = playerA;
        this.playerB = playerB;
    }

    playTurn(attacker, defender) {
        const attackRoll = rollDie();
        const defenseRoll = rollDie();

        const attackDamage = attacker.attack * attackRoll;
        const defenseDamage = defender.strength * defenseRoll;

        const damageDealt = Math.max(0, attackDamage - defenseDamage);
        defender.health = Math.max(0, defender.health - damageDealt);

        console.log(`${attacker.name} attacks ${defender.name} for ${attackDamage} (rolled ${attackRoll}), ${defender.name} defends for ${defenseDamage} (rolled ${defenseRoll}), ${defender.name} takes ${damageDealt} damage, health is now ${defender.health}`);
    }

    playGame() {
        while (this.playerA.isAlive() && this.playerB.isAlive()) {
            if (this.playerA.health < this.playerB.health) {
                this.playTurn(this.playerA, this.playerB);
                if (this.playerB.isAlive()) this.playTurn(this.playerB, this.playerA);
            } else {
                this.playTurn(this.playerB, this.playerA);
                if (this.playerA.isAlive()) this.playTurn(this.playerA, this.playerB);
            }
        }

        const winner = this.playerA.isAlive() ? this.playerA.name : this.playerB.name;
        console.log(`${winner} wins the game!`);
    }
}

module.exports = Game;
