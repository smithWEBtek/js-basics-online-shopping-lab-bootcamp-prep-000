var cart = [];
const reducer = (acc, cv) => acc + cv;

function fillCart() {
	addToCart('shoes')
	addToCart('table')
	addToCart('walker')
	addToCart('book')
	addToCart('radio')
}

var asdf = cart[3]


function getCart() {
	return cart;
}

function setCart(c) {
	cart = c;
	return cart;
}

function addToCart(item) {
	var price = Math.floor(Math.random() * 100);
	var newItem = {
		itemName: item,
		itemPrice: price
	}
	cart.push(newItem)
	return `${item} has been added to your cart.`
}

function viewCart() {
	var cartItems = [];
	var string = "In your cart, you have ";
	if (cart.length === 0) {
		return "Your shopping cart is empty.";
	} else if (cart.length === 1) {
		return string + `${cart[0].itemName} at $${cart[0].itemPrice}.`;
	} else if (cart.length === 2) {
		return string + `${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
	} else {

		for (var i = 0; i < cart.length; i++) {
			cartItems.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
		}
		var partialArray = cartItems.slice(0, cartItems.length - 1);
		console.log(partialArray)

		var partialReturn = string + partialArray.join(", ");
		console.log(partialReturn)

		var lastItem = ", and " + cartItems[cartItems.length - 1] + ".";
		console.log(lastItem)
		return partialReturn + lastItem;
	}
}

function total() {
	var prices = []
	for (i = 0; i < cart.length; i++) {

		console.log('i', i);
		prices.push(cart[i]['itemPrice'])
	}
	// return prices.reduce((acc, cv) => acc + cv);
	return prices.reduce(reducer);
}

// function removeFromCart(item) {
// 	// if (!cart.hasOwnProperty(item.itemName)) {
// 	if (!cart.includes(item)) {
// 		return 'That item is not in your cart.'
// 	} else {
// 		cart.splice(cart.indexOf(item.itemName), 1)
// 	}
// }

function removeFromCart(item) {
	const newCart = cart.filter(el => !el.hasOwnProperty(item));

	if (newCart.length === cart.length) {
		return 'That item is not in your cart.';
	}

	return newCart;
}

function placeOrder(cardNumber) {
	if (cardNumber) {
		var checkoutMessage = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
		cart = []
		return checkoutMessage
	} else {
		return "Sorry, we don't have a credit card on file for you."
	}
}