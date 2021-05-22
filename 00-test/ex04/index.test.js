
const { solution } = require('./index');

test('Basic test', () => {
    var sets = [
        [
            [], // data
            0 // expected
        ],
    ];

    sets.forEach(set => {
        expect(solution(set[0])).toBe(set[1]);
    })
})

