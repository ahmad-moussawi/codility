const { solution } = require('./index');

test('Basic test', () => {

    expect(solution([8, 8, 5, 7, 9, 8, 7, 4, 8])).toBe(7);

    expect(solution([1])).toBe(1);
    expect(solution([10])).toBe(1);
    expect(solution([1, 2])).toBe(2);
    expect(solution([1, 2, 3])).toBe(3);
    expect(solution([1, 2, 1])).toBe(2);
    expect(solution([1, 1, 1, 1])).toBe(1);


    expect(solution([8, 8, 5, 7, 9, 8, 7, 5, 8])).toBe(6)
    expect(solution([8, 8, 5, 7, 9, 9, 7, 5, 7])).toBe(5)
    expect(solution([8, 8, 5, 7, 9, 7, 7, 5, 7])).toBe(5)
    expect(solution([8, 8, 5, 7, 7, 7, 7, 5, 7])).toBe(4)
    expect(solution([8, 8, 5, 7, 7, 7, 7, 5, 7])).toBe(4)
    expect(solution([8, 8, 9, 7, 7, 7, 7, 5, 7])).toBe(5)
    expect(solution([8, 8, 9, 7, 7, 9, 7, 5, 7])).toBe(6)
    expect(solution([8, 8, 8, 7, 7, 6, 6, 5, 5])).toBe(4)
    expect(solution([1, 2, 3, 4, 3])).toBe(4)
    expect(solution([8, 8, 5])).toBe(2)
    expect(solution([8,])).toBe(1)
    expect(solution([8, 8])).toBe(1)
    expect(solution([8, 8, 8, 8, 8])).toBe(1)
    expect(solution([1000000000])).toBe(1)
    expect(solution([1000000000, 2])).toBe(2)
    expect(solution([2, 1000000000, 2])).toBe(2)
    expect(solution([2, 1000000000, 2, 1000000000])).toBe(3)
    expect(solution([2, 1000000000, 2, 1000000000, 1000000000])).toBe(3)


})

test('ascending then descending', () => {
    expect(solution([1, 9, 1])).toBe(2)
    expect(solution([1, 9, 1, 1])).toBe(2)
    expect(solution([1, 9, 1, 1, 1])).toBe(2)
    expect(solution([1, 9, 1, 9])).toBe(3)
    expect(solution([1, 9, 1, 9, 1])).toBe(3)

})
