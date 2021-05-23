const { solution } = require('./index');

test('Basic test', () => {

    expect(
        solution([4, 3, 2, 1, 5], [0, 1, 0, 0, 0])
    ).toBe(2);

    expect(
        solution([4, 3], [0, 1])
    ).toBe(2);

    expect(
        solution([4, 3], [1, 0])
    ).toBe(1);

    expect(
        solution([4, 3, 2, 1], [0, 1, 0, 1])
    ).toBe(3);

    expect(
        solution([4, 3, 2, 1], [1, 1, 1, 0])
    ).toBe(3);

    expect(
        solution([1, 2, 3, 4], [1, 1, 1, 0])
    ).toBe(1);

    expect(
        solution([1, 2, 3, 4, 5, 6, 7], [1, 1, 1, 0, 1, 1, 1])
    ).toBe(4);

    expect(solution([1, 2, 3, 4, 5, 6, 7, 8], [1, 1, 1, 0, 1, 1, 1, 0])).toBe(2);

    expect(solution([4, 3, 2, 1, 5], [1, 0, 1, 0, 1])).toBe(3);
    expect(solution([4, 3, 2, 0, 5], [0, 1, 0, 0, 0])).toBe(2);
    expect(solution([4, 3, 2, 1, 5], [0, 1, 0, 0, 0])).toBe(2);
    expect(solution([4, 3, 2, 1, 5], [0, 1, 1, 0, 0])).toBe(2);
    expect(solution([4, 3, 2, 5, 6], [1, 0, 1, 0, 1])).toBe(2);
    expect(solution([7, 4, 3, 2, 5, 6], [0, 1, 1, 1, 0, 1])).toBe(3);
    expect(solution([3, 4, 2, 1, 5], [1, 0, 0, 0, 0])).toBe(4);
    expect(solution([3], [1])).toBe(1);
    expect(solution([3], [0])).toBe(1);
})

test('Advanced', () => {
    expect(solution([4, 1, 3], [1, 1, 0])).toBe(1);
    expect(solution([4, 2, 1, 3], [1, 0, 1, 0])).toBe(1);
    expect(solution([4, 3], [1, 0])).toBe(1);
})