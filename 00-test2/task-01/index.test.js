const { solution, divisors } = require('./index');

function sort(arr) {
    arr.sort((a, b) => a - b);
    return arr;
}

test('divisors', () => {
    expect(sort(divisors(6))).toStrictEqual([1, 2, 3]);
    expect(sort(divisors(8))).toStrictEqual([1, 2, 4]);
    expect(sort(divisors(220))).toStrictEqual([1, 2, 4, 5, 10, 11, 20, 22, 44, 55, 110]);
})

test('Basic test', () => {
    expect(solution(10)).toBe(0);
    expect(solution(30)).toBe(0);
    expect(solution(230)).toBe(1); // (220, 284)
    expect(solution(6000)).toBe(4); // plus (1184, 1210), (2620, 2924), (5020, 5564)
    expect(solution(10000)).toBe(5); // plus (6232, 6368)
    expect(solution(20000)).toBe(8); // plus (10744, 10856), (12285, 14595), (17296, 18416)
})
