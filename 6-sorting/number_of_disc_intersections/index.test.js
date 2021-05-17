
const { solution } = require('./index');

test('Basic test', () => {
    var sets = [
        [[1, 5, 2, 1, 4, 0], 11],
        [[], 0],
        [[0, 1], 1],
        [[0, 0], 0],
        [[1, 0, 0, 3], 4],
    ];

    sets.forEach(set => {
        expect(solution(set[0])).toBe(set[1]);
    })
})

