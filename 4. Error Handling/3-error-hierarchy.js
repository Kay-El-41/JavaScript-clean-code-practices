// ! Error Hierarchy
// You can create you own error hierarchy which is cool and makes you look like a pro.

try {
  fetchArticles()
} catch (e) {
  console.log(e.name) // Error
  console.log(e.message) // Impossible to connect to the server
  console.log(e.stack) // Error hey\n at fetchArticles:12:3
}

async function fetchArticles() {
  /*
   * DATABASE OPERATION CODE
   */
  throw new Error('Impossible to connect to the server')
}

/* ---------------------------------------------------------------- */

// Let's create a custom error class
class NetworkError extends Error {
  constructor(message) {
    super(message)
    this.name = 'NetworkError'
  }
}

// this error is for network errors

class ServerError extends Error {
  constructor(message) {
    super(message)
    this.name = 'ServerError'
  }
}
// this error is for server errors

// ! NOW THIS IS HOW WE USE THESE ERRORS
try {
  fetchArticles()
} catch (e) {
  if (e instanceof Error) {
    if (e instanceof NetworkError) {
      // * CODE
    }
    if (e instanceof ServerError) {
      // * CODE
    }
  }
}

// * Now we have created our own version of error hierarchy.

/* ---------------------------------------------------------------- */

// ! Let's make this a little more advanced.
// consider a user is logging in.
// let's create a validation error.
class ValidateError extends Error {
  constructor(message) {
    super(message)
    this.name = 'ValidateError'
  }
}

try {
  submitLogin()
} catch (e) {
  if (e instanceof Error) {
    if (e instanceof ValidateError) {
      notifyErrorToUser(e.message)
      // * CODE
    }
  }
  notifyErrorToUser(e.message)
}

// * You can even have more advanced error validation
class MissingPasswordError extends ValidateError {
  constructor(message) {
    super(message)
    this.name = 'MissingPasswordError'
  }
}

try {
  submitLogin()
} catch (e) {
  if (e instanceof Error) {
    if (e instanceof ValidateError) {
      if (e instanceof MissingPasswordError) {
        notifyErrorToUser(e.message)
        // * CODE
      }
    }
  }
  notifyErrorToUser(e.message)
}