function solution(S) {
    if (S.length % 2 !== 0) return 0;
    let opened = 0;

    for (let i = 0; i < S.length; i++) {
        if (S[i] === ')') {
            if (opened === 0) {
                return 0;
            }

            opened--;
        } else {
            opened++;
        }
    }

    return opened === 0 ? 1 : 0;

}

module.exports.solution = solution;

