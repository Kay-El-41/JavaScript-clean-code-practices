// ! Default Parameters Values

function sleep(durationInMilliseconds = 1000) {
  durationInMilliseconds = durationInMilliseconds ?? 1000
  return new Promise((resolve) => setTimeout(resolve, durationInMilliseconds))
}

// It is not 100% necessary to define a default value for a parameter.
// But it is a good practice to define a default value for a parameter where you have to deal with numbers.

// ! Objects?? Here we go!
function createTask(config) {
  config.title = config.title ?? 'Untitled Task'
  config.category = config.category ?? 'main'
  config.isActive = config.isActive ?? true
  // This is very understandable code and this is how you set object's default values.
  // But if there are so many default values to set, this is not ok.
  // The best solution in this case is to define a default object separately.
}

const defaultConfig = {
  title: 'Untitled Task',
  category: 'main',
  isActive: true,
}
// define an object for the default values.

function createMenu(rawConfig) {
  // use assign method.
  const config = Object.assign(defaultConfig, rawConfig)

  // ? What does assign function do?
  // assign is a method that allows you to assign values to an object.
  // The first argument is the object that you want to assign the values to.
  // The second argument will override the default values. Simple right?
}

createTask({
  title: 'Recording',
  category: 'DevTheory',
})
