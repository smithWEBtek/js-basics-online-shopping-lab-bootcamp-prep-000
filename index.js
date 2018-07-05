var cart = [];

function getCart() {
	return cart;
}

function setCart(c) {
	cart = c;
	return cart;
}

function addToCart(item) {
	var newItem = {
		itemName: item,
		itemPrice: Math.floor(Math.random() * 100)
	}
	cart.push(newItem)
	return `${item} has been added to your cart.`
}

function total() {
	var sum = sumUpPrices()
	return sum
}
//////////////////////// Long Way  /////////////////////////////////////
// function removeFromCart(itemName) {
// 	var itemToRemove = searchCartForItemToRemove(itemName)
// 	return itemToRemove ? removeItemFromCart(itemToRemove) : notifyUserThereIsNoItemToRemove()
// }

// function searchCartForItemToRemove(itemName) {
// 	var searchResult
// 	for (var i = 0; i < cart.length; i++) {
// 		if (cart[i].itemName === itemName) { searchResult = cart[i] }
// 	}
// 	return searchResult
// }

// function notifyUserThereIsNoItemToRemove() {
// 	return 'That item is not in your cart.'
// }

// function removeItemFromCart(itemToRemove) {
// 	var indexOfItemToRemove = cart.indexOf(itemToRemove)
// 	cart.splice(indexOfItemToRemove, 1)
// }
//////////////////////////////////////////////////////////////////////////

//////////////////////////// Short Way ////////////////////////////////////
function removeFromCart(item) {
	var itemToRemove
	for (var i = 0; i < cart.length; i++) {
		if (item === cart[i].itemName) {
			cart.splice(i, 1)
			return cart;
		}
	}
	return "That item is not in your cart."
}
//////////////////////////////////////////////////////////////////////////


function placeOrder(cardNumber) {
	if (arguments[0] == undefined) {
		return "Sorry, we don't have a credit card on file for you."
	} else {
		var sumToCharge = total()
		setCart([])
		return `Your total cost is $${sumToCharge}, which will be charged to the card ${cardNumber}.`
	}
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


function sumUpPrices() {
	var sum = 0
	for (var i = 0; i < cart.length; i++) {
		sum = sum + cart[i].itemPrice
	}
	return sum
}
