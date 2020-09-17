function fb(n, cache = { 0: 0, 1: 1 }) {
    if (!(n in cache)) {
        cache[n] = fb(n - 1, cache) + fb(n - 2, cache);
    }
    return cache[n];
}

function fbLess(n) {
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
    var arr = [1, ...A, 1];
    var all = fbLess(arr.length);
    // console.log(arr.length)
    // print(arr, all);
    var rcost = {
        [arr.length - 1]: 0
    };

    // console.log(rcost);

    for (var i = arr.length - 2; i >= 0; i--) {
        if (arr[i] === 0) {
            continue;
        }

        // calculating rcost for the element i
        // var distance = arr.length - i - 1;
        // console.log(`rcost for ${i}, distance: ${distance}`);
        var options = [];

        for (var j = 0; j < all.length, i + all[j] < arr.length; j++) {
            var num = i + all[j];
            // console.log(`checking step: ${all[j]}, arr[${num}]: ${arr[num]}`)
            if (arr[num] === 1 && rcost[num] > -1) {
                var cost = rcost[num] + 1;
                options.push({ i, cost: cost })
            }
        }

        if (options.length) {
            options.sort((a, b) => a.cost - b.cost);
            rcost[i] = options[0].cost;
            // console.log(options);
        }

    }

    return rcost && rcost[0] || -1;
}

console.log(solution([1, 1, 0, 0, 0, 0, 0, 1]));