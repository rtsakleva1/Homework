function bmi(input){

    let weightKillos = Number(input[0]);
    let heightMetters = Number(input[1]);
    let bmi = (weightKillos / (heightMetters * heightMetters)).toFixed(2);
    
    
    console.log(bmi);
    }
    
    bmi(["77","7"])
