function solution() {

    for (let A = 1; A < 10; A++) {
        for (let B = 0; B < 10; B++) {
            if (B === A) continue;

            for (let C = 0; C < 10; C++) {
                if (C === A || C === B) continue;

                for (let D = 0; D < 10; D++) {
                    if (D === A || D === B || D === C) continue;

                    for (let E = 1; E < 10; E++) {
                        if (E === A || E === B || E === C || E === D) continue;

                        var left = A * 10000 + B * 1000 + C * 100 + D * 10 + E;
                        var right = E * 111111;

                        if (A * left === right) {
                            console.log(left, right);
                        }
                    }
                }
            }
        }
    }

}

solution();