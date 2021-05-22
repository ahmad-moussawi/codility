const { solution } = require('./index');

test('Basic test', () => {
    expect(solution('00-44   48  5555 8361')).toBe('004-448-555-583-61');
    expect(solution('0 - 22 1985--324')).toBe('022-198-53-24');
    expect(solution('555372654')).toBe('555-372-654');

    expect(solution('55')).toBe('55');
    expect(solution('555')).toBe('555');
    expect(solution('5554')).toBe('55-54');
    expect(solution('55545')).toBe('555-45');
    expect(solution('555455')).toBe('555-455');
    expect(solution('5554556')).toBe('555-45-56');
    expect(solution('55545567')).toBe('555-455-67');
    expect(solution('555455678')).toBe('555-455-678');
    expect(solution('5554556789')).toBe('555-455-67-89');
    expect(solution('---   5 5 5  4 5 5 6 78------')).toBe('555-455-678');
})

