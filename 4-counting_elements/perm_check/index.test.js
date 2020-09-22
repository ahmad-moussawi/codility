const { solution } = require('./index');

test('Example tests', () => {
    expect(solution([4, 1, 3, 2])).toBe(1)
    expect(solution([4, 1, 3])).toBe(0)
});

test('Passing values bigger than the array size', () => {
    expect(solution([2])).toBe(0)
    expect(solution([1, 2, 4])).toBe(0)
});