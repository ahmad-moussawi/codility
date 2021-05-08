const { solution } = require('./index');

test('Example tests', () => {
    expect(solution([1, 3, 6, 4, 1, 2])).toBe(5)
    expect(solution([1, 2, 3])).toBe(4)
    expect(solution([-1, -3])).toBe(1)
});

test('Basic tests', () => {
    expect(solution([0])).toBe(1)
    expect(solution([-1])).toBe(1)
    expect(solution([-1, 0])).toBe(1)
    expect(solution([-1, 0, 1])).toBe(2)
    expect(solution([1, -1, 0, 3, 4, 5])).toBe(2)
    expect(solution([-1, 0, 1, 3])).toBe(2)
});
