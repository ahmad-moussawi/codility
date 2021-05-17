const { solution } = require('./index');

test('Basic test', () => {
    expect(solution([10, 2, 5, 1, 8, 20])).toBe(1);
    expect(solution([10, 50, 5, 1])).toBe(0);
})
