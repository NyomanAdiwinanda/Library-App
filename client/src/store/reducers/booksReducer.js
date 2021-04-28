const initialState = {
  data: [],
  loading: false,
  error: null
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'books/setBooks':
      return {...state, data: payload}
    case 'loading/setLoading':
      return {...state, loading: payload}
    case 'error/setError':
      return {...state, error: payload}
    default:
      return state
  }
}

export default reducer