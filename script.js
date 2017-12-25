
//PARTNER EXERCISE 1

var rock = function () {
    console.log("I wanna rock!");
}

rock();
rock();
rock();

//PARTNER EXERCISE 2


var convertWeight = function (kilos) {
    var lbs = kilos * 2.2;
    console.log(lbs);

}

//PARTNER EXERCISE 3


var convertWeight = function (number, unit) {
    if (unit == 'kilos') {
        var lbs = number * 2.2;
        console.log(lbs);
    } else if (unit == 'pounds') {
        var kg = number / 2.2;
        console.log(kg);
    }

}

var convertWeight = function (number, unit) {
    if (typeof number !== 'number') {
        alert('please enter valid number')
    }
    if (typeof unit !== 'kilos' && typeof unit !== 'pounds') {
        alert('please use kilo or pound units only');
    }
    if (unit == 'kilos') {
        var lbs = number * 2.2;
        console.log(lbs);
    } else if (unit == 'pounds') {
        var kg = number / 2.2;
        console.log(kg);
    }

}

//INDIVIDUAL EXERCISE 1


var calcAge = function (currentyear, birthyear) {
    var result = currentyear - birthyear;
    return result;
}

//INDIVIDUAL EXERCISE 2


var calcAge = function (currentyear, birthyear) {
    var result = currentyear - birthyear;
    console.log('You are either ' + (result - 1) + " or " + result);
}

//INDIVIDUAL EXERCISE 3
var isPrime = function (num) {
    if (num === 1) {
        return false;
    }
    else if (num === 2) {
        return true;
    } else {
        for (var x = 2; x < num; x++) {
            if (num % x === 0) {
                return false;
            }
        }
        return true;
    }

}
console.log(isPrime(1));

//INDIVIDUAL EXERCISE 4

var myArray = [2, 8, 6, 9, 15];

function getAverage(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
        var result = sum / array.length;
    }
    return result;
}

getAverage(myArray);

//INDIVIDUAL EXERCISE 5


var nums = [2, 5, 7, 10];

function numbersCheck(array, num) {
    if (array.includes(num)) {
        return true;
    } else {
        return false;
    }

}

//INDIVIDUAL EXERCISE 6


var nums = [2, 5, 7, 10, 12, 1, 25];

function printNums(array, number) {
    for (var i = 0; i < array.length; i++) {
        if (number > array[i]) {
            console.log(array[i])
        } else {
            console.log('there is no smaller number');
        }
    }

}
