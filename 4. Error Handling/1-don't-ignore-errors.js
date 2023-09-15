// ! DON'T IGNORE ERRORS

// * The first rule of error handling is to never ignore the error code.

try {
  somethingThatCanFail()
} catch (e) {
  console.log(e)
  // or
  console.error(e)
}

// ? This is the most typical error handling form.
// While this is ok in the development phase, it is a big problem in the production. Because it doesn't do anything except logging an error.

try {
  somethingThatCanFail()
} catch (e) {
  console.log(e)
  // We could notify the user
  notifyErrorToUser(e)
  reportError(e)
  // we could report errors to our error tracker.
  // ! There are many error trackers we can use online. This is tell us what is happening in our application in real time.
  // ! For example, if we have 5 errors in 1 minutes, send us a message from the slack or something.
  // ! Error trackers might be expensive but they work wonders if you are doing a large application.
}
