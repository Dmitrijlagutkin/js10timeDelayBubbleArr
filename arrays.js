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

const delayFunk = setInterval(() => {
	console.log("I'm a delayed function")
	clearTimeout(delayFunk)
}, 3500)

// --------third part (test bubbeles Arr)---------

function ConstructArrFunk(arrLenght, firstNum = -1000, secondNum = 1000) {
	const myArr = []
	for (let i = 0; i < arrLenght; i++) {
		myArr.push(firstNum + Math.random() * (secondNum - firstNum))
	}
	return myArr
}

const myArrFirst = ConstructArrFunk(10)
const myArrSecond = ConstructArrFunk(100)
const myArrThird = ConstructArrFunk(1000)

console.log(myArrFirst)
// console.log(myArrSecond)
// console.log(myArrThird)

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