function solution(s) {

    // remove nondigit
    s = s.replace(/\D/g, '');

    var tokens = [];
    while (s.length > 4) {
        tokens.push(s.substring(0, 3));
        s = s.substring(3);
    }

    // if we face 4 characters here split in twos
    if (s.length === 4) {
        tokens.push(s.substring(0, 2));
        tokens.push(s.substring(2));
    } else {
        tokens.push(s)
    }

    return tokens.join('-');
}

module.exports.solution = solution;

