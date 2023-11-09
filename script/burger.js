const nav = document.querySelector('.nav__list')
const burger = document.querySelector('.burger')

function burgerClick(){
	console.log('burger')
	nav.classList.toggle('nav__list_active')
	burger.classList.toggle('active')
	navLinks.forEach((link,index)=>{
		if(link.style.animation){
			link.style.animation = ''
		}else{
			link.style.animation = `navLinkAnim 2s ease forwards ${index / 7 + 0.3}s`
		}
	})
}



