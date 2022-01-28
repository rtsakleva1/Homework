function getHighestScoreIndex() {

    let students = ["Ivan", "Pesho", "Maria"];
    let scores = [5, 4, 6];

    let maxScore = scores[i];
    let maxIndex;

    for (let i = 0; i < scores.length; i++) {
        const number = scores[i];
        console.log(number, i);
        if (number >= maxScore) {
            maxScore = number;
            maxIndex = students[i] ;
        }

    }


    console.log(`${maxIndex} has the highest score:${maxScore}`);





}

// TASK: дефинирайте функция 'getHighestScoreIndex()', която да връща индекса на най-големият елемент от масива scores.



// TASK: като използвате функцията getHighestScoreIndex() изпишета в конзолата името на студента с най-висока оценка:

// ---> YOUR CODE HERE <---

// expected output
// Maria has the higest score: 6