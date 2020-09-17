function fb(n, cache = { 0: 0, 1: 1 }) {
    if (!(n in cache)) {
        cache[n] = fb(n - 1, cache) + fb(n - 2, cache);
    }
    return cache[n];
}

function possibleSteps(n) {
    let i = 3;
    let result = [1];
    while (fb(i) <= n) {
        result.push(fb(i++));
    }
    return result;
}

function print() {
    [...arguments].forEach(arr => {
        console.log(`[${arr.join(', ')}]`);
    })
}

function solution(A) {
    let arr = [1, ...A, 1];
    let steps = possibleSteps(arr.length);
    let cost = { [arr.length - 1]: 0 };

    for (let i = arr.length - 2; i >= 0; i--) {
        if (arr[i] === 0) {
            continue;
        }

        cost[i] = -1;

        for (var j = 0; j < steps.length, i + steps[j] < arr.length; j++) {
            var target = i + steps[j];
            if (arr[target] === 1 && cost[target] > -1) {

                if (cost[i] === -1 || cost[target] + 1 < cost[i]) {
                    cost[i] = cost[target] + 1;
                }

                // if we get a minimum cost
                // no need to continue checking
                if (cost[i] === 1) {
                    break;
                }
            }
        }
    }

    return cost[0];
}

console.log(solution([0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1]));