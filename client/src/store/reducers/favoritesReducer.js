const initialState = {
  data: []
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'favorites/setFavorites':
      return {...state, data: state.data.concat(payload)}
    default:
      return state
  }
}

export default reducer