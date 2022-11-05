const array = ["laptop", "phone", "charger"];
let wordlength = [];

for (i in array) {
  const result = array[i];
  const lengthOfArray = array[i].length;
  wordlength.push(lengthOfArray);
}
