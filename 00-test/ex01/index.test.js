const { solution } = require('./index');

/*

Example test:   (['pim', 'pom'], ['999999999', '777888999'], '88999')
OK

Example test:   (['sander', 'amy', 'ann', 'michael'], ['123456789', '234567890', '789123456', '123123123'], '1')
OK

Example test:   (['adam', 'eva', 'leo'], ['121212121', '111111111', '444555666'], '112')
*/

test('Basic test', () => {
    expect(solution(
        ['pim', 'pom'],
        ['999999999', '777888999'],
        '88999'
    )).toBe('pom');

    expect(solution(
        ['pim', 'pom', 'puma', 'pu'],
        ['999999999', '777888999', '772888999', '712888999'],
        '88999'
    )).toBe('pu');

    expect(solution(
        ['sander', 'amy', 'ann', 'michael'],
        ['123456789', '234567890', '789123456', '123123123'],
        '1'
    )).toBe('ann');

    expect(solution(
        ['adam', 'eva', 'leo'],
        ['123212321', '111111111', '444555666'],
        '112'
    )).toBe('NO CONTACT');

    expect(solution(
        ['b', 'a', 'abc'],
        ['123212321', '111111111', '444555666'],
        '1'
    )).toBe('a');

    expect(solution(
        ['a'],
        ['123212321'],
        '6666'
    )).toBe('NO CONTACT');
})


