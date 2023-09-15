// ! Keep Functions Short

// * The first rule of functions is that they should be small.
// * The second rule of functions is that they should be smaller than that.

// ? Doing only one thing

async function login(username, password) {
  // login with client database
  // * CODE TO LOGIN
  // Saving the accessToken in the localStorage
  // * CODE TO SAVE ACCESS TOKEN
  // Redirecting the user to the homepage
  // * CODE TO REDIRECT TO HOMEPAGE
}

// The function is not doing a single thing.
// As if the function name login, the function should only do the login.
// Redirecting should be outside of the function.

async function login(username, password) {
  // login with client database
  // * CODE TO LOGIN
  // Saving the accessToken in the localStorage
  // * CODE TO SAVE ACCESS TOKEN
}

// This should be like this.

/* ---------------------------------------------------------------- */

// ? Extracting other functions

function submitLogin(username, password) {
  try {
    // Validation of the username and password
    // * CODE TO VALIDATE USERNAME AND PASSWORD
    // login with client database
    // * CODE TO LOGIN
    // Redirecting the user to the homepage
    // * CODE TO REDIRECT TO HOMEPAGE
  } catch (e) {
    // Managing the error
    // * CODE TO MANAGE ERROR
  }
}

// This function is also not doing a single thing.
// A method to make a function smaller is to extract the functions from the function.
// This is how we do it.

function validateLoginFields(username, password) {
  // Validation of the username and password
  // * CODE TO VALIDATE USERNAME AND PASSWORD
}

// Now we refactor the function.
async function submitLogin(username, password) {
  try {
    validateLoginFields(username, password)
    await login(username, password)

    // Redirecting the user to the homepage
    // * CODE TO REDIRECT TO HOMEPAGE
  } catch (e) {
    // Managing the error
    // * CODE TO MANAGE ERROR
  }
}

// Now this is what we called extraction abstraction levels.
// It is basically extracting the functions from the function.
