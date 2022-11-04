const inputArray = ['gummy', 'phone', 'charger']
const lengthsArray = []

inputArray.map(item => {
	lengthsArray.push(item.length + 4)
})

const longestString = Math.max(...lengthsArray)

const starFunc = () => {
	let stars = ''
	for (let i = 1; i <= longestString; i++) {
		stars = stars + '*'
	}
	console.log(stars)
}

const getRemainingSpace = item => {
	const remainingSpace = longestString - (item.length + 2)
	return ' '.repeat(remainingSpace - 1)
}

starFunc()

inputArray.map(item => {
	getRemainingSpace(item)
	console.log(`* ${item}${getRemainingSpace(item)}*`)
})

starFunc()
