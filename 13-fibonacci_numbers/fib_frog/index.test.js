const { fbs, solution } = require('./index');

test('it should return a valid fb range', () => {
    expect(fbs(0)).toEqual([]);
    expect(fbs(1)).toEqual([1]);
    expect(fbs(2)).toEqual([1, 2]);
    expect(fbs(3)).toEqual([1, 2, 3]);
    expect(fbs(4)).toEqual([1, 2, 3]);
    expect(fbs(5)).toEqual([1, 2, 3, 5]);
    expect(fbs(6)).toEqual([1, 2, 3, 5]);
    expect(fbs(7)).toEqual([1, 2, 3, 5]);
    expect(fbs(8)).toEqual([1, 2, 3, 5, 8]);
});

test('returns 1 when empty', () => {
    expect(solution([])).toEqual(1);
})

test('returns 1 when array size is <=  2', () => {
    expect(solution([0])).toEqual(1);
    expect(solution([1])).toEqual(1);
    expect(solution([0, 0])).toEqual(1);
    expect(solution([0, 1])).toEqual(1);
    expect(solution([1, 0])).toEqual(1);
    expect(solution([1, 1])).toEqual(1);
})

test('returns 1 when all zeros and size + 1 is not fb number', () => {
    expect(solution([0, 0, 0])).toEqual(-1);
    expect(solution([0, 0, 0, 0, 0])).toEqual(-1);
    expect(solution([0, 0, 0, 0, 0, 0])).toEqual(-1);
})

test('returns 1 when size + 1 is a fb number', () => {
    expect(solution([0, 0])).toEqual(1);
    expect(solution([1, 1])).toEqual(1);
    expect(solution([0, 0, 0, 0])).toEqual(1);
    expect(solution([1, 1, 1, 1])).toEqual(1);
    expect(solution([0, 0, 0, 0, 0, 0, 0])).toEqual(1);
    expect(solution([1, 1, 1, 1, 1, 1, 1])).toEqual(1);
    expect(solution([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toEqual(1);
    expect(solution([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toEqual(1);
})
