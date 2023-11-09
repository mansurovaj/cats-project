const header = document.querySelector(".header");
const footer = document.querySelector(".footer");
const body = document.querySelector("body");
const navLinks = document.querySelectorAll('.nav__link')
let color = ''
let textColor = ''

if(localStorage.getItem('bg-color')!==null){
	textColor = localStorage.getItem('text-color')
	color = localStorage.getItem('bg-color')
	header.style.backgroundColor = color
	footer.style.backgroundColor = color
	body.style.backgroundColor = color
	navLinks.forEach((el)=>{
		el.style.color = "text-color"
	})
}

function choiceDark() {
	console.log("включается темная тема")
	header.style.backgroundColor = "#28015ced"
	footer.style.backgroundColor = "#28015ced"
	body.style.backgroundColor = "#28015ced"

	body.style.transition="1s ease-out 0.5s"
	header.style.transition="1s ease-out 0.5s"
	footer.style.transition="1s ease-out 0.5s"

	navLinks.forEach((el)=>{
		el.style.color = "white"
		el.style.transition = '1s ease-out 0.5s'
	})

	localStorage.setItem('text-color','white')
	localStorage.setItem("bg-color", "#28015ced")
}
function choiceLight() {
	header.style.backgroundColor = "#f694ff"
	footer.style.backgroundColor = "#f694ff"
	body.style.backgroundColor = "#f694ff"

	body.style.transition="1s ease-out 0.5s"
	header.style.transition="1s ease-out 0.5s"
	footer.style.transition="1s ease-out 0.5s"

	navLinks.forEach((el)=>{
		el.style.color = "black"
		el.style.transition = '1s ease-out 0.5s'
	})
		localStorage.setItem('text-color','black')
	localStorage.setItem("bg-color", "#f694ff")
}