export const setBooks = (payload) => {
  return {
    type: 'books/setBooks',
    payload
  }
}

export const setLoading = (payload) => {
  return {
    type: 'loading/setLoading',
    payload
  }
}

export const setError = (payload) => {
  return {
    type: 'error/setError',
    payload
  }
}

export const setBooksAsync = (date) => {
  return (dispatch) => {
    dispatch(setLoading(true))
    fetch(`https://api.nytimes.com/svc/books/v3/lists/${date}/hardcover-fiction.json?api-key=${process.env.REACT_APP_SECRET_KEY}`)
      .then(res => res.json())
      .then(data => {
        dispatch(setBooks(data.results.books))
      })
      .catch((err) => dispatch(setError(err)))
      .finally((_) => dispatch(setLoading(false)))
  }
}