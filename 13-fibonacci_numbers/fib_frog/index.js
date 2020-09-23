function fbs(n) {
    if (n === 0) return [];
    let next, a = [0, 1, 1];
    while ((next = a[a.length - 1] + a[a.length - 2]) <= n) {
        a.push(next);
    }
    return a.slice(2);
}

function solution(A) {
    let arr = [1, ...A];
    let steps = fbs(arr.length + 1);
    let cost = [];
    cost[arr.length] = 0;

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === 0) continue;

        cost[i] = -1;

        for (let j = 0; j < steps.length, i + steps[j] < arr.length + 1; j++) {
            let target = i + steps[j];
            if (!(target === arr.length || arr[target] === 1 && cost[target] > -1)) continue;

            if (cost[i] === -1 || cost[target] + 1 < cost[i]) {
                cost[i] = cost[target] + 1;
            }

            // no need to continue in case of
            // getting the minimum cost possible
            if (cost[i] === 1) break;
        }
    }

    return cost[0];
}

function print() {
    [...arguments].forEach(arr => {
        console.log(`[${arr.join(', ')}]`);
    })
}

// console.log(solution([0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1]));

module.exports.fbs = fbs;
module.exports.solution = solution;