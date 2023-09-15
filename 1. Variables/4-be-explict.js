// ! Always be Explicit (တိတိကျကျ ေဖာ်ပြပါ။)

const daysOfTheWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

daysOfTheWeek.forEach((d) => {
  // do something with d
  console.log(d)
})
// at a short feature, this is ok. d, we know d represents a day of the week.
// ! BUT

daysOfTheWeek.forEach((d) => {
  // do something with d
  console.log(d)
  /*
    -----
    ----
    ---
    ----
    -----
    */
  console.log(d)
})

// what if we have a feature that is so long? There will be time we cannot know what is d at a glance.
// For example, the feature is long that we cannot see the start of the code in the screen, then we will be trouble, What is d??
// You are already struggling with other code. And you just saw that 'd' that doesn't have meaning to do with the code you are struggling.
// Imagine how furious you will be.
// Instead, do this from the start.

daysOfTheWeek.forEach((dayOfTheWeek) => {
  // do something with d
  console.log(dayOfTheWeek)
  /*
      -----
      ----
      ---
      ----
      -----
      */
  console.log(dayOfTheWeek)
})

// Remember, naming 'day' is not specific as we discussed in the previous chapter. (2-proper-naming)
// Instead, if we use dayOfTheWeek, we can know exactly this is one of the days of the week.