function solution(A) {
    // max1 is the largest, min2 is the smallest
    var max1 = -1001, max2 = -1001, max3 = -1001, min1 = 1001, min2 = 1001;
    // var max1 = A[0], max2 = A[0], max3 = A[0], min1 = A[0], min2 = A[0];

    for (var i = 0; i < A.length; i++) {
        if (A[i] > max1) {
            max3 = max2;
            max2 = max1;
            max1 = A[i];
        } else if (A[i] > max2) {
            max3 = max2;
            max2 = A[i];
        } else if (A[i] > max3) {
            max3 = A[i];
        }

        if (A[i] <= min2) {
            min1 = min2;
            min2 = A[i];
        } else if (A[i] < min1) {
            min1 = A[i];
        }
    }

    console.log(`data: ${A.join(',')}
    max: ${[max1, max2, max3].join(', ')}
    min: ${[min2, min1].join(', ')}
    sol1: ${max1 * max2 * max3}
    sol2: ${min1 * min2 * max1}
        `);

    return Math.max(max1 * max2 * max3, min1 * min2 * max1);
}

module.exports.solution = solution;