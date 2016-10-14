var fizzbuzz = function (maxNum) {
    for (var i = 1; i <= maxNum; i += 1) {
        if (i % 3 === 0 && i % 5 !== 0) {
            console.log("fizz");
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log("buzz");
        } else if (i % 5 === 0 && i % 3 === 0) {
            console.log("fizzbsuzz");
        } else {
            console.log(i);
        }

    }
};
