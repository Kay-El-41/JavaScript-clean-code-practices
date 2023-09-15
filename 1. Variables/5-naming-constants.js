// ! Naming Constants

const MAX_NUMBER_OF_RETRY = 3
// One of the original convention is to use all uppercase letters connected with snake_case.
// This is something good, but not the best.

// let consider this scenario.
const USER_NAME = 'John'
// We have an application for john. That is ok.
// Suddenly, john wants his family members to use the app too.
// Now we are in trouble. We have to change from CONST to LET.
let userName = ''
// As you predicted, every function we coded with USER_NAME will not be working anymore since the name convention is changed.

// Therefore, instead of snake_case, we should just use that is similar to our usual clean code convention.
const maxNumberOfRetry = 3
// Be explicit and no redundant words.

// ! In this time of writing this notes, it is suggested that upper snake_case should only be used for ENVIRONMENT VARIABLES.
