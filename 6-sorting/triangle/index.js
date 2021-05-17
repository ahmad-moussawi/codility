function solution(A) {
    // 0 <= P < Q < R < N
    // A[P] + A[Q] > A[R]
    // A[Q] + A[R] > A[P]
    // A[R] + A[P] > A[Q]

    // by sorting the following rules will automatically get verified
    // A[Q] + A[R] > A[P]
    // A[R] + A[P] > A[Q]

    A.sort((a, b) => a - b);

    for (var i = 0; i < A.length - 2; i++) {
        if (A[i] + A[i + 1] > A[i + 2]) {
            return 1;
        }
    }

    return 0;
}

module.exports.solution = solution;

