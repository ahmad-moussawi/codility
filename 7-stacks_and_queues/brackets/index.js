function solution(S) {

    if (S.length % 2 !== 0) return 0;

    const opening = {
        '}': '{',
        ']': '[',
        ')': '(',
    };

    const stack = [];

    for (var c of S) {
        const isOpening = !!opening[c];

        // starting with a closing tag is always invalid
        if (stack.length === 0 && isOpening) {
            return 0;
        }

        if (stack.length && opening[c] === stack[stack.length - 1]) {
            stack.pop();
        } else {
            stack.push(c);
        }
    }

    return stack.length ? 0 : 1;
}

module.exports.solution = solution;

