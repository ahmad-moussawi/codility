function solution(A) {
    if (A.length === 0) return 0;

    var seen = {};

    for (var i = 0; i < A.length; i++) {
        if (A[i] in seen) {
            continue;
        }
        seen[A[i]] = true;
    }

    return Object.keys(seen).length;
}

module.exports.solution = solution;