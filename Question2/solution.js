let input = ['test', 't'];

let longestWord = '';
let lengthOfAsteriskBorder;
let widthOfAsteriskBorder;

for (word of input){
  if (word.length > longestWord.length){
    longestWord = word;
  }
}

lengthOfAsteriskBorder = longestWord.length + 4;

let output = ''

let topBorder = '*'.repeat(lengthOfAsteriskBorder);
output = topBorder;

for (let i = 0; i < input.length; i++){
  output += '\n' + '* ' + input[i].padEnd(lengthOfAsteriskBorder - 4, ' ') + ' *';
}

let bottomBorder = '*'.repeat(lengthOfAsteriskBorder);
output += '\n' + bottomBorder;

console.log(output)
