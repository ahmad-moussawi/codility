function start(A, K) {
    if (A % K === 0) return A;
    if (A < K) return K;
    return A + K - A % K;
}

function end(B, K) {
    if (B % K === 0) return B;
    return B - B % K;
}

function solution(A, B, K) {
    var a = start(A, K);
    var b = end(B, K);
    return 1 + (b - a) / K;
}

module.exports.solution = solution;
