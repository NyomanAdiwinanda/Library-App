const logger = storeAPI => next => action => {

  console.log('dispatching...', action)
  next(action)
  console.log('state saat ini', storeAPI.getState())

  return null
}

export default logger
