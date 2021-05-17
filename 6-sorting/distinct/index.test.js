const { solution } = require('./index');

test('It should return 0 when there is no elements', () => {
    expect(solution([])).toBe(0);
})

test('Basic examples', () => {
    expect(solution([1, 1, 2])).toBe(2);
    expect(solution([1, 1, 2, 2, 2])).toBe(2);
    expect(solution([1, 1, 2, 2, 2, 5, 1])).toBe(3);
})

test('With negative and zeros numbers', () => {
    expect(solution([1, 1, 2, -1, -8, 1, 1])).toBe(4);
    expect(solution([1, 1, 0, 0, 2, 2, 2, 0, -1])).toBe(4);
})

test('All zeros', () => {
    expect(solution([0, 0, 0, 0, 0, 0, 0, 0, 0])).toBe(1);
})