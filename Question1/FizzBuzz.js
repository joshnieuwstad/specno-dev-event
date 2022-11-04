let testNumber = 15;
let outputArray =[]
//Output: ["1","2","Fizz","4"]

for(let i=1; i<=testNumber;i++){
    if(i%3==0&&i%5==0){
        outputArray.push("fizzbuzz")
    }
    else if(i%3==0){
        outputArray.push("Fizz")
    }
    else if(i%5==0){
        outputArray.push("Buzz")
    }
    else{
        outputArray.push(`${i}`)
    }
}
console.log(outputArray)
