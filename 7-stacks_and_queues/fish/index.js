/**
 * @param {Number[]} A
 * @param {Number[]} B
 *
 * UP       - «««« - »»» - «« - « - ««««« - DOWN
 * A[P]        4      3     2   1    5
 * B[P]        0      1     0   1    0
 */
function solution(A, B) {
    const stack = [];
    let eaten = 0;

    for (var i = 0; i < A.length; i++) {

        if (B[i] === 1) {
            // add to the stack on downstream
            stack.push(A[i]);
            continue;
        }

        // in upstream, in each round a fish will get eaten,
        // we will stop the loop once the current fish is weaker
        // the the last one in the downstream
        while (stack.length) {
            eaten++;
            if (A[i] < stack[stack.length - 1]) {
                break;
            }

            // current one win, so remove the last one from the stack
            stack.pop();
        }
    }

    return A.length - eaten;
}

module.exports.solution = solution;
