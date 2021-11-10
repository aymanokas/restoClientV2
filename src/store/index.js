import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'
import { persistStore, persistCombineReducers } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { reducer as Menu } from './Menu'
import { reducer as Checkout } from './Checkout'

const reducers = {
  Menu,
  Checkout
}

const rootReducer = persistCombineReducers({
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['Menu']
}, reducers)

const sagaMiddleware = createSagaMiddleware()
const enhancers = []
const middlewares = []

middlewares.push(sagaMiddleware)
middlewares.push(logger)

enhancers.push(applyMiddleware(...middlewares))

const composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(...enhancers) : compose(...enhancers)

export const store = createStore(
  rootReducer,
  composedEnhancers
)

export const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)
