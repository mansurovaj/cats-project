const time = document.querySelector('.time')
function currentTime() {
	let date = new Date();
	let hours = date.getHours()
	let minutes = date.getMinutes()
	let sec = date.getSeconds()

	hours = plusZero(hours)
	minutes = plusZero(minutes)
	sec = plusZero(sec)

	time.textContent = hours + " : " + minutes + " : " + sec;
}

function plusZero(number) {
	if(number<10){
		return "0" + number
	}else{
		return number
	}
}

setInterval(currentTime, 1000)