const { rollDie } = require('../src/utils');

test('rollDie should return a value between 1 and 6', () => {
    const roll = rollDie();
    expect(roll).toBeGreaterThanOrEqual(1);
    expect(roll).toBeLessThanOrEqual(6);
});
