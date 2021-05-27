function solution(H) {
    let count = 0, stack = [];

    for (let i = 0; i < H.length; i++) {
        var current = H[i];

        // going down
        while (stack.length && stack[stack.length - 1] >= current) {
            if (stack.pop() === current) {
                break;
            }
            count++;
        }

        stack.push(current);
    }

    // add the remaining count in the stack if any
    count += stack.length;

    return count;
}

module.exports.solution = solution;