const { solution } = require('./index');

test('Basic test', () => {
    expect(solution("{[()()]}")).toBe(1);
    expect(solution("([)()]")).toBe(0);
    expect(solution("")).toBe(1);
    expect(solution("[")).toBe(0);
    expect(solution("[{]")).toBe(0);
    expect(solution("[{]]")).toBe(0);
    expect(solution("[]]")).toBe(0);
    expect(solution("[]")).toBe(1);
    expect(solution("[{}{}]")).toBe(1);
    expect(solution("[{}{([{}])}[([{()}])]]")).toBe(1);
    expect(solution("[{}{([{}])}[([{()}])]")).toBe(0);
})

