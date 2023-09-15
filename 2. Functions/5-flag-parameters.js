// ! DON'T USE FLAG PARAMETERS

// ? What are flag parameters?
// * Flag parameters are the parameters that are used in the start of the function to check whether true or false.

function updateUser(isPremium) {
  if (isPremium) {
    // * CODE TO DO
  } else {
    // * CODE TO DO
  }

  // The isPremium parameter is used at the start of the function, it is a flag parameter.
  // If you can see, this function is doing two things based on the value of the isPremium parameter.
  // The clean code theory of the function is to only perform one action. This is a red flag for us.
}

// * We will refactor this function.
function updatePremiumUser() {}

function updateFreeUser() {}

// In your code, use like this.
if (isPremium) {
  updatePremiumUser()
} else {
  updateFreeUser()
}

// * This is always better than using flag parameters.

// ! But if you really NEED to use functions with flag parameters, you can use the following code flow.
function updateUser(isPremium) {
  // * DO SOMETHING WITH THE PARAMETER FIRST

  if (isPremium) {
    sendNewsByMessage()
  } else {
    sendNewsByMail()
  }
  // * The functions you are going to use should be similar, and small functions.
}
