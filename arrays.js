// -----first psrt (time)-----

function timeInPage() {
	const myTime = new Date()
	let hours = myTime.getHours()
	let minutes = myTime.getMinutes()
	let seconds = myTime.getSeconds()
	hours = checkTime(hours)
	minutes = checkTime(minutes)
	seconds = checkTime(seconds)
	document.body.innerText = hours + ":" + minutes + ":" + seconds
}

function checkTime(time) {
	return time < 10 ? time = "0" + time : time
}

const timerId = setInterval(() => timeInPage(), 500);


//-----second psrt (delay funktion)-----

const delayFunk = setTimeout(() => {
	console.log("I'm a delayed function")
}, 3500)

// --------third part (test bubbeles Arr)---------

function constructArrFunk(arrLenght, firstNum = -1000, secondNum = 1000) {
	const myArr = []
	for (let i = 0; i < arrLenght; i++) {
		myArr.push(firstNum + Math.random() * (secondNum - firstNum))
	}
	return myArr
}

const myArrFirst = constructArrFunk(10)
const myArrSecond = constructArrFunk(100)
const myArrThird = constructArrFunk(1000)

function bubbleSort(someArr) {
	for (let i = someArr.length - 1; i > 0; i--) {
		for (let j = 0; j < i; j++) {
			if (someArr[j] > someArr[j + 1]) {
				let tempVar = someArr[j]
				someArr[j] = someArr[j + 1]
				someArr[j + 1] = tempVar
			}
		}
	}
	return someArr
}

console.time("time")
const sortedMyArrFirst = bubbleSort(myArrFirst)
console.timeEnd("time")
console.log("array length -", sortedMyArrFirst.length)

console.time("time")
const sortedMyArrSecond = bubbleSort(myArrSecond)
console.timeEnd("time")
console.log("array length -", sortedMyArrSecond.length)

console.time("time")
const sortedMyArrThird = bubbleSort(myArrThird)
console.timeEnd("time")
console.log("array length -", sortedMyArrThird.length)

const arrSort = function (someArr) {
	someArr.sort((prev, next) => {
		return prev - next
	})
	return someArr
}

console.time("time")
const firstArrSort = arrSort(myArrFirst)
console.timeEnd("time")
console.log("array length -", firstArrSort.length)

console.time("time")
const secondArrSort = arrSort(myArrSecond)
console.timeEnd("time")
console.log("array length -", secondArrSort.length)

console.time("time")
const thirdArrSort = arrSort(myArrThird)
console.timeEnd("time")
console.log("array length -", thirdArrSort.length)