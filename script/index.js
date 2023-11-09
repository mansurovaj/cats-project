let richag = 0
const btn = document.getElementById('btn')
let basket = 0
let price = btn.previousSibling.previousSibling.textContent
price = price.replace(' ', '')
price = parseInt(price)
const basketPrice = document.querySelector('.price')

if(localStorage.getItem('basket') !== null){
	basket = localStorage.getItem('basket')
	basketPrice.textContent = basket
}
if(localStorage.getItem('richag') !==null){
	richag = localStorage.getItem('richag')
	richag = parseInt(richag)
	if(richag ==false){
		btn.innerHTML = "купить"
		btn.style.background = "red"
	}else{
		btn.innerHTML = "в корзине"
		btn.style.background = "green"
	}
}

function buy() {

	if(richag == false){
		btn.innerHTML = "оформляется"; 
		btn.style.background = "pink";	
		richag = 1;
		basket = parseInt(basket) + price
	}else if(richag ==true){
		btn.innerHTML = "заказать"; 
		btn.style.background = "silver";	
		richag = 0;
		basket = parseInt(basket) - price
	}
	basketPrice.textContent = basket
	
	localStorage.setItem('basket', basket)
	localStorage.setItem('richag', richag)
}
