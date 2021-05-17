const { solution } = require('./index');

test('Basic test', () => {
    var sets = [
        // [[-3, 1, 2, -2, 5, 6], 60],
        [[-3, 1, 2, -2, 1, 2], 18],
    ];

    sets.forEach(set => {
        expect(solution(set[0])).toBe(set[1]);
    })
})

test('More advanced test', () => {
    var sets = [
        [[-3, 1, 2], -6],
        [[-3, 1, 2, -2, 5, 6], 60],
        [[-3, 1, -100, 2, -2, 5, 6], 1800],
        [[-3, 1, -100], 300],
        [[-3, 1, 0, -100], 300],
        [[-3, 1, 2, 0, -100], 600],
        [[10, 10, 10], 1000],
    ];


})

test('All negative', () => {
    expect(solution([-3, -2, -1])).toBe(-6);
    expect(solution([-3, -2, 0])).toBe(0);
    expect(solution([-100, -200, -10, -299, -2, 0])).toBe(0);
    expect(solution([0, 0, 0])).toBe(0);
})