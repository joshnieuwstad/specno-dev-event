let outputArray = []

for (let i = 1; i <= 3; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		outputArray.push('Fizzbuzz')
	} else if (i % 3 === 0) {
		outputArray.push('Fizz')
	} else if (i % 5 === 0) {
		outputArray.push('Buzz')
	} else {
		outputArray.push(`${i}`)
	}
}

console.log(outputArray)
