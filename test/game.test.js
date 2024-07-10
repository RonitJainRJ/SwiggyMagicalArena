const Player = require('../src/player');
const Game = require('../src/game');

test('Game should end with one player\'s health reaching 0', () => {
    const playerA = new Player('Player A', 10, 5, 10);
    const playerB = new Player('Player B', 10, 5, 10);

    const game = new Game(playerA, playerB);
    game.playGame();

    const onePlayerIsAlive = playerA.isAlive() !== playerB.isAlive();
    expect(onePlayerIsAlive).toBe(true);
});
