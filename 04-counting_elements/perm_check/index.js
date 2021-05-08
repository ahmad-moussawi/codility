function solution(A) {
    const map = {};
    let sum = 0;

    for (let i = 0; i < A.length; i++) {

        // Optional enhancement:
        // if we get a value that is larger than the array size
        // so we are sure that this array is not a permutation
        if (A[i] > A.length) return 0;

        sum += A[i];

        map[A[i]] = true;
    }

    // Optional enhancement:
    // Comparing the expected and real sum if they are equals
    // @see: sum of numeric sequence
    const expectedSum = A.length * (1 + A.length) / 2;

    if (expectedSum !== sum) {
        return 0;
    }


    // The last chance here in case where they have a correct sum
    for (let i = 1; i <= A.length; i++) {
        if (!(i in map)) return 0;
    }

    return 1;
}

module.exports.solution = solution;