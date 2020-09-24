const { start, solution, end } = require('./index');

test('start should return K when A < K', () => {
    expect(start(0, 5)).toBe(0);
    expect(start(99, 100)).toBe(100);
    expect(start(950, 1000)).toBe(1000);
    expect(start(1005, 1000)).toBe(2000);
})

test('start should return the next divisable of K when A > K', () => {
    expect(start(105, 100)).toBe(200);
    expect(start(1500, 1000)).toBe(2000);
    expect(start(901, 900)).toBe(1800);
    expect(start(6, 2)).toBe(6);
})


test('end B and K', () => {
    expect(end(105, 10)).toBe(100);
    expect(end(105, 5)).toBe(105);
    expect(end(107, 5)).toBe(105);
})

test('start should return K when A === K', () => {
    expect(start(100, 100)).toBe(100);
})

test('Example tests', () => {
    expect(solution(6, 11, 2)).toBe(3)
    expect(solution(6, 12, 2)).toBe(4)
    expect(solution(0, 4, 2)).toBe(3)
    expect(solution(0, 1, 11)).toBe(1)
    expect(solution(11, 345, 17)).toBe(20)
    expect(solution(0, 0, 11)).toBe(1)
    expect(solution(0, 1, 11)).toBe(1)
    expect(solution(1, 0, 11)).toBe(0)
    expect(solution(1, 1, 11)).toBe(0)

    expect(solution(10, 10, 5)).toBe(1)
    expect(solution(10, 10, 7)).toBe(0)
    expect(solution(10, 10, 20)).toBe(0)
});

test('Big values', () => {
    expect(solution(100, 123000000, 2)).toBe(61499951)
    expect(solution(101, 123000000, 10000)).toBe(12300)
});

test('Return 0 when A, B < K', () => {
    expect(solution(2, 8, 10)).toBe(0)
});