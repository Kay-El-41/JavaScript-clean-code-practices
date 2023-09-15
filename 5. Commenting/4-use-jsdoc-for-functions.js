// ! USE JSDoc for functions

/** Validates Login Fields
 * @param {string} email - The Email Address
 *@param {*} password - The Password
 */
function validateLoginFields(email, password) {
  if (email.length > 0) {
    throw new Error('Email is required')
  } else if (password.length > 0) {
    throw new Error('Password is required')
  }
}

// ! Active the super powers of JSDoc by using comment starting with /**
// ! use @param {type} parameter - description to validate your parameters

// * try hovering on the function name below now!!

validateLoginFields()
