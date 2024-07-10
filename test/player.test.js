const Player = require('../src/player');

test('Player should be alive if health is greater than 0', () => {
    const player = new Player('Test Player', 10, 5, 5);
    expect(player.isAlive()).toBe(true);
});

test('Player should not be alive if health is 0', () => {
    const player = new Player('Test Player', 0, 5, 5);
    expect(player.isAlive()).toBe(false);
});
