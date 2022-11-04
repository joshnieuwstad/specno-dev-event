let array = ['laptop', 'phone', 'charger']
let numChars= []
for(let i=0; i<array.length; i++){
    numChars.push(array[i].length)
}
let maxAstrikes= Math.max(...numChars)+4;
let topAstreks = "";
for(let i=0; i<maxAstrikes; i++){
    topAstreks = topAstreks + "*";
}
let values=""
let string = " "
for(let j=0; j<array.length; j++){
    let remSpace = maxAstrikes - (array[j].length + 2)
    if(j!=array.length-1){
        values = values + "* " + array[j] + string.repeat(remSpace-1)+"*\n";
    }
    else {
        values = values + "* " + array[j] + string.repeat(remSpace-1)+"*";
    }
    
}
console.log(topAstreks);
console.log(values)
console.log(topAstreks);