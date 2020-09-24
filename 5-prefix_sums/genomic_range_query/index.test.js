const { solution } = require('./index')

test('Example test', () => {
    expect(solution('CAGCCTA', [2, 5, 0], [4, 5, 6])).toBe([2, 4, 1]);
})