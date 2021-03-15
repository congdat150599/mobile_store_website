let carts = document.querySelectorAll('.cart');

var products = [
	{
		name: 'cong dat',
		tag: 'gray',
		price: 15,
		inCart:0
	},
	{
		name: 'cong dat',
		tag: 'gray',
		price: 15,
		inCart:0
	},
	{
		name: 'cong dat',
		tag: 'gray',
		price: 15,
		inCart:0
	},
	{
		name: 'cong dat',
		tag: 'gray',
		price: 15,
		inCart:0
	}
];

for (let i = 0; i < carts.length; i++){
	carts[i].addEventListener('click', () => {
		cartNumbers();
	});
}	

function onLoadCartNumbers(){
	let productNumbers = localStorage.getItem('cartNumbers');

	if (productNumbers) {
		document.querySelector('.Shopping_cart span').textContent = productNumbers;
	}
}

function cartNumbers(){
	let productNumbers = localStorage.getItem('cartNumbers');

	productNumbers = parseInt(productNumbers);

	if(productNumbers){
		localStorage.setItem('cartNumbers', productNumbers + 1);
		document.querySelector('.Shopping_cart span').textContent = productNumbers + 1;
	}else{
		localStorage.setItem('cartNumbers', 1);
		document.querySelector('.Shopping_cart span').textContent = 1;
	}
}

onLoadCartNumbers();