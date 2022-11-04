
// Function to determine what the input should change to
function changeFizBuzz (input){
    
    // Value to hold the string
    let fizBuzzAnswer;

    // If divisible by 3 and 5 return FizzBuzz
    // Else if divisible by 3 return Fizz
    // Else if divisible by 5 return Buzz
    // Else return input and Stringify the Input(Task example is stringified n README)
    if (input%3 == 0 && input%5 ==0){
        fizBuzzAnswer = "FizzBuzz";
    }else if(input%3 == 0){
        fizBuzzAnswer = "Fizz";
    }else if(input%5 == 0){
        fizBuzzAnswer = "Buzz";
    }else{
        fizBuzzAnswer= input.toString();
    }

    return fizBuzzAnswer;
}


function createArray (input){
    // Value to hold the array
    let arrayCreation = [];

    // For loop that tuns until the the input value
    // Value must start at 1 as task requirement
    // Store value that is receiver from changeFizBuzz function
    // Push to the array the new value
    for(let i = 1; i<=input; i++){

        let testNumber = changeFizBuzz (i);
        arrayCreation.push(testNumber);
    }

    return arrayCreation;
}

// Input value & Display to console
let n = 15;
console.log(createArray (n));