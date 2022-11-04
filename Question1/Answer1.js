let n = 15
let output = []

for (let i = 1 ; i<=n ; i++) {
if (i % 3 == 0 && i % 5 == 0) {
    output.push("Fizzbuzz")
  }
 else if (i%3 == 0) {
output.push('Fizz')
 }
 else if (i%5 == 0) {
  output.push('buzz')
 }
 else output.push(i)
}
console.log(output)
