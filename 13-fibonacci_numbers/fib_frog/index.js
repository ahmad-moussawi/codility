function fbs(n) {

    if (n === 0) return [];

    const arr = [0, 1, 1];
    let i = 3;

    while (arr[i - 1] + arr[i - 2] <= n) {
        arr[i] = arr[i - 1] + arr[i - 2];
        i++;
    }

    return arr.slice(2);
}

function solution(A) {
    let arr = [1, ...A, 1];
    let steps = fbs(arr.length);
    let cost = { [arr.length - 1]: 0 };

    for (let i = arr.length - 2; i >= 0; i--) {
        if (arr[i] === 0) continue;

        cost[i] = -1;

        for (let j = 0; j < steps.length, i + steps[j] < arr.length; j++) {
            let target = i + steps[j];
            if (!(arr[target] === 1 && cost[target] > -1)) continue;

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

console.log(solution([0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1]));