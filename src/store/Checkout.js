import { put, takeLatest } from 'redux-saga/effects'

const initialState = {
  tableId: 0,
  order: []
}

export const reducer = (state = initialState, { type, data }) => {
  switch (type) {
    case ADD_PRODUCT:
      return {
        ...state,
        order: [...state.order, data]
      }
    case REMOVE_PRODUCT:
      return {
        ...state,
        order: data
      }
    case UPDATE_ORDER_VARIABLES:
      return {
        ...state,
        order: data
      }
    default:
      return state
  }
}

export const addProductAction = (data) => ({ type: ADD_PRODUCT_REQUESTED, data })
export const removeProductAction = (data) => ({ type: REMOVE_PRODUCT_REQUESTED, data })
export const confirmOrderAction = (data) => ({ type: CONFIRM_ORDER_REQUESTED, data })
export const setVariablesAction = (data) => ({ type: SET_VARIABLES_REQUESTED, data })

function* addProduct({ data }) {
  console.log('store :', data)
  yield put({ type: ADD_PRODUCT, data })
}

function * removeProduct ({ data }) {
  yield put({ type: REMOVE_PRODUCT, data })
}

function * setVariables ({ data }) {
  yield put({ type: UPDATE_ORDER_VARIABLES, data })
}

export function * CheckoutRootSaga () {
  yield takeLatest(ADD_PRODUCT_REQUESTED, addProduct)
  yield takeLatest(REMOVE_PRODUCT_REQUESTED, removeProduct)
  yield takeLatest(SET_VARIABLES_REQUESTED, setVariables)
}

const ADD_PRODUCT_REQUESTED = 'ADD_PRODUCT_REQUESTED'
const REMOVE_PRODUCT_REQUESTED = 'REMOVE_PRODUCT_REQUESTED'
const CONFIRM_ORDER_REQUESTED = 'CONFIRM_ORDER_REQUESTED'
const ADD_PRODUCT = 'ADD_PRODUCT'
const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
const SET_VARIABLES_REQUESTED = 'SET_VARIABLES_REQUESTED'
const UPDATE_ORDER_VARIABLES = 'UPDATE_ORDER_VARIABLES'
