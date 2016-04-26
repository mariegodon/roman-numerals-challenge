var prompt = require("prompt");

prompt.start();

function baseTenToRoman() {

    var roman = [];

    prompt.get(["Enter a number between 1 and 5000"], function(err, result) {
        var userNumber = result["Enter a number between 1 and 5000"];
        if (userNumber < 1 || userNumber > 5000) {
            console.log("Pick a valid number!");
            baseTenToRoman();
        }
        else if (userNumber === 5000) {
            console.log("5000 in roman numerals is V");
            return;
        }
        else {
            var userNumberArr = userNumber.split("");
            var length = userNumberArr.length;
            //console.log(userNumberArr);

            //thousands
            if (userNumberArr.length === 4) {
                var i = 0;
                while (i < userNumberArr[0]) {
                    roman.push("M");
                    i++;
                }
                console.log(roman);
            }
            //hundreds
            if (userNumberArr.length >= 3) {
                i = 0;
                if (userNumberArr[length - 3] >= 9) {
                    roman.push("CM");
                }
                else if (userNumberArr[length - 3] >= 5) {
                    roman.push("D");
                    if (userNumber[length - 3] >= 6) {
                        i = 5;
                        while (i < userNumber[length - 3]) {
                            roman.push("C");
                            i++;
                        }
                    }
                }
                else if (userNumberArr[length - 3] >= 1) {
                    if (Number(userNumberArr[length - 3]) === 4) {
                        roman.push("CD");
                    }
                    else {
                        i = 0;
                        while (i < userNumberArr[length - 3]) {
                            roman.push("C");
                            i++
                        }
                    }
                }
            }
            //tens
            if (userNumberArr.length >= 2) {
                if (Number(userNumber[length - 2]) === 9) {
                    roman.push("XC");
                }
                else if (userNumber[length - 2] >= 5) {
                    roman.push("L");
                    if (userNumber[length - 2] >= 6) {
                        i = 5;
                        while (i < userNumber[length - 2]) {
                            roman.push("X");
                            i++;
                        }
                    }
                }
                else if (userNumber[length - 2] >= 1) {
                    if (Number(userNumber[length - 2]) === 4) {
                        roman.push("XL");
                    }
                    else {
                        i = 0;
                        while (i < userNumberArr[length - 2]) {
                            roman.push("X");
                            i++;
                        }
                    }
                }
            }


            //ones
            if (Number(userNumber[length - 1]) === 9) {
                roman.push("IX");
            }
            else if (userNumber[length - 1] >= 5) {
                roman.push("V");
                if (userNumber[length - 1] >= 6) {
                    i = 5;
                    while (i < userNumber[length - 1]) {
                        roman.push("I");
                        i++;
                    }
                }
            }
            else if (userNumber[length - 1] >= 1) {
                if (Number(userNumber[length - 1]) === 4) {
                    roman.push("IV");
                }
                else {
                    i = 0;
                    while (i < userNumberArr[length - 1]) {
                        roman.push("I");
                        i++;
                    }
                }
            }
        }
        console.log(roman.join(""));
    });
}

baseTenToRoman();