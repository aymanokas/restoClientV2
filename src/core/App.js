import React from 'react'
import Routes from '../navigation'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from '../store'

export default () =>
  <ReduxProvider store={store}>
    <PersistGate persistor={persistor}>
      <Routes />
    </PersistGate>
  </ReduxProvider>
