var prompt = require("prompt");

prompt.start();

function pushNumerals(length, userNumberArr, roman, position, five, ten, ones) {
    if (userNumberArr[length - position] >= 9) {
        roman.push(ones + ten);
    }
    else if (userNumberArr[length - position] >= 5) {
        roman.push(five);
        if (userNumberArr[length - position] >= 6) {
            pushOnes(length, userNumberArr, roman, position, ones, 5);
        }
    }
    else if (userNumberArr[length - position] >= 1) {
        if (Number(userNumberArr[length - position]) === 4) {
            roman.push(ones + five);
        }
        else {
            pushOnes(length, userNumberArr, roman, position, ones, 0);
        }
    }
}

function pushOnes(length, userNumberArr, roman, position, ones, i) {
    while (i < userNumberArr[length - position]) {
        roman.push(ones);
        i++
    }
}

function baseTenToRoman() {

    var roman = [];

    prompt.get(["Enter a number between 1 and 5000"], function(err, result) {

        var userNumber = result["Enter a number between 1 and 5000"];

        if (userNumber < 1 || userNumber > 5000) {
            console.log("Pick a valid number!");
            baseTenToRoman();
        }

        else if (Number(userNumber) === 5000) {
            console.log("5000 in roman numerals is V");
            return;
        }

        else {
            var userNumberArr = userNumber.split("");
            var length = userNumberArr.length;

            //thousands
            if (userNumberArr.length === 4) {
                pushOnes(length, userNumberArr, roman, 4, "M", 0);
            }

            //hundreds
            if (userNumberArr.length >= 3) {
                pushNumerals(length, userNumberArr, roman, 3, "D", "M", "C");
            }

            //tens
            if (userNumberArr.length >= 2) {
                pushNumerals(length, userNumberArr, roman, 2, "L", "C", "X");
            }

            //ones
            pushNumerals(length, userNumberArr, roman, 1, "V", "X", "I");
        }
        console.log(userNumber + " in roman numerals is " + roman.join(""));
    });
}

baseTenToRoman();