// xbonacciArray with array and length input
function xbonacciArray(inputArray, inputLength){

    // Determine the length of the array
    // Declare array to store the values
    let lengthOfArray = inputArray.length;
    let newArray = [];

    // Run a for loop for the amount of times given in inputLength
    for(let i = 0; i<inputLength; i++){
        // If the iteration is within the length of the array, the add the existing array
        // Else calculate the value to be added
        if(i<lengthOfArray){
            newArray.push(inputArray[i])
        } else{
            // Declare value to store
            let addSum = 0;
            // Run over the last "lengthOfArray" values and add it to the addSum
            for(let j = 0; j<lengthOfArray; j++){
                addSum += newArray[(newArray.length-j-1)]
            }
            // Push the total of addSum to the new array
            newArray.push(addSum)
        }
    }
    return newArray;
}

// Call the function and display to console
console.log(xbonacciArray([1,1,1,1], 10));