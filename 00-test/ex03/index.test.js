
const { solution } = require('./index');

test('Basic test', () => {

    expect(solution(
        2015,
        'January',
        'February',
        'Thursday'
    )).toBe(7);

    expect(solution(
        2004,
        'January',
        'March',
        'Thursday'
    )).toBe(12);


    expect(solution(
        2004,
        'January',
        'April',
        'Thursday'
    )).toBe(16);

    expect(solution(
        2004,
        'January',
        'May',
        'Thursday'
    )).toBe(21);


})

