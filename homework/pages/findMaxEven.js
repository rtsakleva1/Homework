function findMaxEven() {

    // TASK: да се дефинира функцията findMaxEven(), която да връща максималното четно число от подаденият й масив.

    // ---> YOUR CODE HERE <---

    // TEST
    let numbers = [2, -4, 5, 3, 9, 0, 1];
    let max = numbers[i];
    let number = numbers[0];

    for (var i = 0; i <= numbers.length; i++) {

        if (number <= max) {
            console.log(`The max of ${numbers} is ${max}`);
        }

    }

    let numbers = [2, -4, 5, 3, 9, 0, 1];
    let max = findMaxEven(numbers);



}

findMaxEven()