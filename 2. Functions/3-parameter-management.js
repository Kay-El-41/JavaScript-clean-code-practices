// ! Parameter Management

// * The best is to always put two parameters maximum
// It is ok to use three parameters, but two's always good to go.

// Consider a scenario
function updateUserAddress(country, city, postalCode, street) {
  // As you can see from the glance, you can know that the function will be large and complex.
  // More parameters means more complexity. We don't want that.
  // Misplacement of the arguments will surely lead to chaos!
}

// ? There will be situations where you have to use parameter like these.
// During that time, all you need is an object.

function updateUserAddress({ country, city, postalCode, street }) {
  // * CODE
}

updateUserAddress({
  street: '123 Main St',
  city: 'New York',
  postalCode: '10001',
  country: 'USA',
})

// Using objects is much more better than using multiple parameters.
// This is because when you use parameters, you can't mess up the parameters' positions.
// With objects, your parameters becomes key and they can be used in any order.
