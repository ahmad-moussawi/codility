function solution(A) {
    const seen = {};

    for (let i = 0; i < A.length; i++) {
        if (A[i] < 1) continue;
        seen[A[i]] = true;
    }

    let min = 1;
    while (min in seen) {
        min++;
    }

    return min;
}

module.exports.solution = solution;