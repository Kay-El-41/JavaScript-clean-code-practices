// ! 1. Avoid using global or upper-scoped variables in your functions.
// ?
const welcomeMessage = 'Hello World!'
//  Consider we have a global scope welcomeMessage.
const lines = splitMessageIntoLines()
// Here we call a function without arguments.

function splitMessageIntoLines() {
  return welcomeMessage.split(/\r?\n/)
}
// This is looking ok.
// ! Imagine once you have two welcome messages to display. You need to change the welcomeMessage variable into welcomeMessage1.
// ! NoW you are code is bug introduced.

// ? Solution to solve this problem is to use a parameter.

/* ---------------------------------------------------------------- */

// ! 2. Avoid changing the values of references.

function addItemToCart(cart, item) {
  cart.push({ item, date: Date.now() })
}

// This is not a pure function
// A pure function is a function that does not change any parameters that is sent to.
function addItemToCart(cart, item) {
  return [...cart, { item, date: Date.now() }]
}
// Now this is a pure function because it does not change any parameters that is sent to, instead it returns a new array.
