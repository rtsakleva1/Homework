// TASK: Given the array: numbersArr bellow, write the code (using a for loop) which will create two new arrays:
// evenNums - which elements will be the positive even numbers from numbersArr.
// oddNums - which elements will be the negative odd numbers from numbersArr.

// Note that the Zero is neither positive nor negative number!

// HINT: you can push a value in a array by using array.push(value) method. 


var numbersArr = [1, 6, -3, 5, 2, -8, 0, 4, 3];
var evenNums = [];
var oddNums = [];
var Sum = numbersArr[i];

for (var i = 0; i <= numbersArr.length; i++) {
    console.log(Sum);

}

if ((Sum > 0) && (Sum % 2 === 0)) {

    evenNums.push(sum);
} else if ((Sum < 0) && (Sum % 2 !== 0)) {
    oddNums.push(Sum);
}

