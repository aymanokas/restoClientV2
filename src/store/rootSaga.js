import { all } from 'redux-saga/effects'
import { CheckoutRootSaga } from './Checkout'
import { MenuRootSaga } from './Menu'

export default function * () {
  yield all([
    CheckoutRootSaga(),
    MenuRootSaga()
  ])
}
