function solution(A, B, P) {

    const matches = B.map((x, i) => [x, A[i]])
        .filter(x => x[0].includes(P))
        .map(x => x[1])
        .sort((a, b) => {

            // sort by length then by ascii order

            if (a.length > b.length) {
                return 1;
            }

            if (a.length < b.length) {
                return -1;
            }

            return a < b ? -1 : 1;
        });

    if (matches.length) {
        return matches[0];
    }

    return 'NO CONTACT';
}

module.exports.solution = solution;

