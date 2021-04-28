import { createStore, applyMiddleware } from 'redux'
import logger from '../middlewares/logger.js'
import thunk from 'redux-thunk'
import reducer from './reducers/index.js'

const store = createStore(reducer, applyMiddleware(logger, thunk))

export default store