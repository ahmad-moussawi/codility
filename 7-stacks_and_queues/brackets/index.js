function solution(S) {

    // odd length string are always invalid
    if (S.length % 2 !== 0) return 0;

    const map = {
        '}': '{',
        ']': '[',
        ')': '(',
    };

    const stack = [];
    const openTags = Object.values(map);

    for (var c of S) {
        const isOpening = openTags.includes(c);

        if (isOpening) {
            stack.push(c);
        } else {
            // starting with a closing tag is always invalid
            if (stack.length === 0) {
                // console.error(`Receiving closing tag '${c}' at the begining`);
                return 0;
            }

            const last = stack.pop();

            if (map[c] !== last) {
                // console.error(`Unmatched closing tag '${last}' for ${c}`);
                return 0;
            }
        }
    }

    return stack.length ? 0 : 1;
}

module.exports.solution = solution;

