// Function to gravity flip
function gravityFlip(position, inputArray){

    // If Right sort the items in the array from small to large
    // Else if Left sort the array and reverse the array
    if(position == "R"){
        inputArray.sort()
    }else if(position == "L"){
        inputArray.sort().reverse()
    }
    return inputArray;
}

// Display to console
console.log(gravityFlip('L', [1, 1, 5, 4, 3]));