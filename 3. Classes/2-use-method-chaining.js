// ! USE Method Chaining

// * Creating a demo class
class Task {
  static defaultConfig = {
    title: 'Untitled',
    category: 'main',
    isActive: true,
  }

  constructor(config) {
    const finalConfig = Object.assign(Task.defaultConfig, config)

    this.name = title
    this.category = category
    this.isActive = isActive
  }

  setName(name) {
    this.name = name
    return this
  }

  setCategory(category) {
    this.category = category
    return this
  }

  setActive(isActive) {
    this.isActive = isActive
    return this
  }

  save() {
    console.log(this.name, this.category, this.isActive)
  }
}
// * END of Demo class

const task = new Task({
  title: 'Teaching',
  category: 'Clean Code',
})

task.setCategory('Javascript')
task.save()

// This is how we normally use class methods.
// ? What is method chaining? Take a look at this.

task.setCategory('JavaScript Clean Code').setName('Teaching Coding').save()
// In order to use this, your class methods must have a return statement.
// Without return, the method chaining will not be executed.
