// ! USE FINALLY CLAUSE

let isLoading = true

try {
  await fetchArticles()
} catch (e) {
  isLoading = false
  notifyUser('Failed to load articles')
  reportError(e)
} finally {
  isLoading(false)
}

// Because we know whether fetching articles, the loading has to be ended.
// In this case, we should use finally clause, to end the loading.
// This is the best practice to use finally clause in such cases.
