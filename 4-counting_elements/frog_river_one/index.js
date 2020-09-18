function solution(X, A) {
    let map = {}, seen = 0;

    for (let i = 0; i < A.length; i++) {
        if (A[i] > X) continue;

        if (!(A[i] in map)) {
            map[A[i]] = true;
            seen++;
        }

        if (seen === X) return i;
    }

    return -1;
}

console.log(solution(5, [1, 3, 1, 4, 2, 3, 5, 4]));