// Function to find the length of the longest word in the array
function findLongestLetter(input){

    let longestWord=0;
    for (let i=0; i<input.length; i++){
        if(input[i].length>longestWord){
            longestWord=input[i].length;
        }
    }
    return longestWord;
}


function createStarsString(input){

    // Find longest character word in the array
    let amountStars = findLongestLetter(input);

    // Create the amount of stars for the top and bottom based on the length of the word
    // Add 4 stars for the sides of the word
    let starStringTopBottom ="";
    for(let i =0; i<(amountStars+4); i++ ){
        starStringTopBottom +="*"
    }

    // Start the textAreaFormatting with stars top and a new line
    let textAreaFormatting = starStringTopBottom;
    textAreaFormatting += "\n";

    // Run a for loop to add each line with the word in the array
    for(let i = 0; i<input.length; i++){
        
        // Start the new word line with  star and space
        // Add the word
        let newWordLine = "* ";
        newWordLine += input[i];

        // Run a for loop of the longest word minus word length the amount of blank spaces
        for(let j = 0; j < (amountStars - input[i].length); j++ ){
            newWordLine += " ";
        }

        // Add end space, star and new line
        newWordLine += " *\n";
        // Add the newly created line to textAreaFormatting
        textAreaFormatting += newWordLine
    }
    
    // Closing star at the bottom
    textAreaFormatting += starStringTopBottom;

    return textAreaFormatting;
}

// test array and display to function
let n = ['laptop', 'phone', 'charger'];
console.log(createStarsString(n));