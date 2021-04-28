const initialState = {
  data: new Date()
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'date/setDate':
      return {...state, data: payload}
    default:
      return state
  }
}

export default reducer