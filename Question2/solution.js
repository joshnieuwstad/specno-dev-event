function asteriskBorder(words){
  if (words.length == 0) throw Error('Array should have at least one element');

  let longestWord = '';

  for (word of words){
    if (word.length > longestWord.length){
      longestWord = word;
    }
  }

  let lengthOfAsteriskBorder = longestWord.length + 4;
  let output = ''

  let topAndBottomBorder = '*'.repeat(lengthOfAsteriskBorder);
  output = topAndBottomBorder;

  for (let i = 0; i < words.length; i++){
    output += '\n' + '* ' + words[i].padEnd(lengthOfAsteriskBorder - 4, ' ') + ' *';
  }

  output += '\n' + topAndBottomBorder;

  return output;
}
