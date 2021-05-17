function solution(A) {
    var intersections = 0, active = 0, events = [];

    for (var i = 0; i < A.length; i++) {
        events.push({
            x: i - A[i],
            isStart: true
        });

        events.push({
            x: i + A[i],
            isStart: false
        });
    }

    // sort by position, then starting point first
    events.sort((a, b) => {
        if (a.x < b.x) return -1;
        if (a.x > b.x) return 1;

        if (a.isStart) return -1;
        if (b.isStart) return 1;
    });

    for (var i = 0; i < events.length; i++) {
        if (events[i].isStart) {
            intersections += active;
            active++;
        } else {
            active--;
        }

        if (intersections > 10E6) {
            return -1;
        }
    }

    return intersections;
}

module.exports.solution = solution;

