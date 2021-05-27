function divisors(n) {
    let r = [1];
    var sqrt = Math.sqrt(n);

    for (let i = 2; i <= sqrt; i++) {
        if (n % i === 0) {
            r.push(i);
            r.push(n / i);
        }
    }

    return r;
}

function sum(arr) {
    return arr.reduce((a, b) => a + b, 0);
}
function sumDiv(n) {
    var div = divisors(n)
    return div.reduce((a, b) => a + b, 0);
}

function solution(N) {

    let count = 0;
    const set = {};

    for (let i = 220; i <= N; i++) {
        var s1 = sumDiv(i);

        if (s1 === i) {
            continue;
        }

        var s2 = sumDiv(s1);

        if (s2 === i) {
            if (!set[i] && !set[s1]) {
                set[i] = true;
                set[s1] = true;
                count++;
            }
        }
    }

    return count;
}

module.exports.solution = solution;
module.exports.divisors = divisors;