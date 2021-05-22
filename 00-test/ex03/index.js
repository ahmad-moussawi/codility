function solution(Y, A, B, W) {
    var isLeap = Y % 4 === 0;

    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    var months = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ];

    var l = [
        31, isLeap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
    ];

    function dayName(index) {
        return days[(index + days.indexOf(W)) % 7];
    }

    var startDayIndex = l.slice(0, months.indexOf(A)).reduce((a, b) => a + b, 0);

    var startDay = dayName(startDayIndex);

    console.log(`First day in ${A} ${startDayIndex}: ${startDay}`);

    if (startDay !== 'Monday') {
        startDayIndex += 7 - days.indexOf(startDay);
        startDay = dayName(startDayIndex);
    }

    // console.log(`First monday in ${A} ${startDayIndex}: ${startDay}`);


    var endDayIndex = l.slice(0, months.indexOf(B) + 1).reduce((a, b) => a + b, -1);
    var endDay = dayName(endDayIndex);

    // console.log(`EndDayIndex: ${endDayIndex} ${endDay}, days.IndexOf(startingDay): ${days.indexOf(endDay)}`);


    if (endDay !== 'Sunday') {
        endDayIndex -= 1 + days.indexOf(endDay);
        endDay = dayName(endDayIndex);
    }

    // console.log(`Adjusted EndDayIndex: ${endDayIndex} ${endDay}`);
    var delta = endDayIndex - startDayIndex + 1;

    // console.log(`
    // Y ${Y}, ${A} ==> ${B}: ${delta / 7}
    // Start: ${startDay} ${startDayIndex}
    // End: ${endDay} ${endDayIndex}
    // Delta: ${delta}
    // `);

    return delta / 7;
}


module.exports.solution = solution;

