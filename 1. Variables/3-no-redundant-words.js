// ! No Redundant Words
// * data, info, record, list, etc ...

const userData = {}
const user = {}

// what is inside userData? what is inside user? We don't know. But we know they are both related to the same object.
// In this case, data is the redundant word. It doesn't provide any information. So we shouldn't use userData which will makes us more confused.
////userData = {}

/* ---------------------------------------------------------------- */

const productList = []
const products = []

// productList, even at glance, we can know these contains the products more than one.
// Instead, we could just use products. Plural form always better.

/* ---------------------------------------------------------------- */

const taskInfo = {}
const task = {}

const tasks = []
// taskInfo, even at glance, we can know this is the data specific to a task. So why don't we use just task.
// tasks, since it is in the plural form, we can know it is the list of tasks.

/* ---------------------------------------------------------------- */
