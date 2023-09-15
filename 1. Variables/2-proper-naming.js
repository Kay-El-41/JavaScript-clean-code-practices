// ! Proper Naming
// ? Meaningful Naming

const data = { id: 1, name: 'John' }
// This is a bad naming, we cannot know what data is at a glance.
const user = { id: 1, name: 'John' }
// Now we can know this is a user object even at a glance.
// For even better, use name based on context.
const customer = { id: 1, name: 'John' }
// Now we know this is a customer object with context related to the customer.

/* ----------------------------------------------------------------------- */

// ? Be Pronounceable

const yyyymmdd = moment().format('YYYY-MM-DD')
// It is too long and you cannot know what this does.
const currentDate = moment().format('YYYY-MM-DD')
// This is much better than yyyymmdd. For much better, keep the library as it is.
const currentDate_1 = moment()
currentDate_1.format('YYYY-MM-DD')
// This is a lot better. Now we can use the variable in any format we need.
// We could also use this in every part of the code that need without repeating a similar code.

/* ----------------------------------------------------------------------- */

// ? Be Detailed

const days = 12
// What is this? At a glance you might think, what days?? What number of days?
// Even if you know the data, you might think which day? May 12? April 12? or Some Anniversary?
const daysSinceCreation = 12
// Now we can know, this is the days since creation of that object or user.

const time = 3756
// What is this shit again?
const timeSinceLastCheck = 3756
// This is much better than previous name.
const timeSinceLastCheckInMs = 3756
// We don't usually need to do this. But if your codebase use multiple format, this is absolutely needed.

// ? Booleans?
// * is, are, should, has, etc ...

let loading = true
// You might be thinking is it loading?? As you are thinking, we should rename this to our thinking.
let isLoading = true

let productsInCart = false
// You might not know what exactly is it if you glance at this code.
// if it is something like this: "user.productsInCart", is it number of products in cart?? or just checking if it is empty.

let hasProductsInCart = false
// Now you know what this variable means.
// using vtb in front of variable names is always a great idea to know exactly a variable is boolean.   
