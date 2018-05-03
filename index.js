var cart = [];

function getCart() {
	return cart;
}

function setCart(c) {
	cart = c;
	return cart;
}

function addToCart(item) {
	var item = generateCartItem(item)
	cart.push(item)
	return `${item.itemName} has been added to your cart.`
}

function generateCartItem(itemName) {
	return {
		itemName: itemName,
		itemPrice: getRandomInt(1, 100)
	}
}

function total() {
	var sum = sumUpPrices()
	return sum
}

function removeFromCart(itemName) {
	var itemToRemove = searchCartForItemToRemove(itemName)
	return itemToRemove ? removeItemFromCart(itemToRemove) : notifyUserThereIsNoItemToRemove()
}

function placeOrder(cardNumber) {
	if (arguments[0] == undefined) {
		return "Sorry, we don't have a credit card on file for you."
	} else {
		var sumToCharge = total()
		setCart([])
		return `Your total cost is $${sumToCharge}, which will be charged to the card ${cardNumber}.`
	}
}

// helper functions
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function viewCart() {
	var cartDescription = 'In your cart, you have '

	if (cart.length === 0) {
		return "Your shopping cart is empty."
	} else {
		if (cart.length >= 1) {
			cartDescription += `${cart[0].itemName} at $${cart[0].itemPrice}`
		}
		if (cart.length >= 2) {
			var middleCartItemsDescription = ''
			for (var i = 1; i < cart.length - 1; i++) {
				middleCartItemsDescription += `, ${cart[i].itemName} at $${cart[i].itemPrice}`
			}
			cartDescription += `${middleCartItemsDescription}, and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}`
		}
	}
	return `${cartDescription}.`
}

function searchCartForItemToRemove(itemName) {
	var searchResult
	for (var i = 0; i < cart.length; i++) {
		if (cart[i].itemName === itemName) { searchResult = cart[i] }
	}
	return searchResult
}

function sumUpPrices() {
	var sum = 0
	for (var i = 0; i < cart.length; i++) {
		sum = sum + cart[i].itemPrice
	}
	return sum
}

function notifyUserThereIsNoItemToRemove() {
	return 'That item is not in your cart.'
}

function removeItemFromCart(itemToRemove) {
	var indexOfItemToRemove = cart.indexOf(itemToRemove)
	cart.splice(indexOfItemToRemove, 1)
}