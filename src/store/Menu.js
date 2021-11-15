import { put, takeLatest } from 'redux-saga/effects'

const initialState = {
  selectedCategorie: 0,
  selectedPlate: {},
  items: []
}

export const reducer = (state = initialState, { type, data }) => {
  switch (type) {
    case GET_MENU_SUCCESS:
      return {
        ...state,
        items: data
      }
    case SET_ACTIVE_CATEGORY_SUCCESS:
      return {
        ...state,
        selectedCategorie: data
      }
    case SET_SELECTED_PLATE_SUCCESS:
      return {
        ...state,
        selectedPlate: data
      }
    default:
      return state
  }
}

export const getMenuAction = (data) => ({ type: GET_MENU_REQUESTED, data })
export const setActiveCategoryAction = (data) => ({ type: SET_ACTIVE_CATEGORY_REQUESTED, data })
export const setSelectedPlateAction = (data) => ({ type: SET_SELECTED_PLATE_REQUESTED, data })

function * getMenu ({ data }) {
  const formatedData = data.map((d, index) => {
    d.products = d.products.map((p, i) => {
      return {
        ...p,
        selectedVariables: []
      }
    })
    return d
  })
  yield put({ type: GET_MENU_SUCCESS, data: formatedData })
}

function * setActiveCategory ({ data }) {
  yield put({ type: SET_ACTIVE_CATEGORY_SUCCESS, data })
}

function * setSelectedPlate ({ data }) {
  yield put({ type: SET_SELECTED_PLATE_SUCCESS, data })
}

export function * MenuRootSaga () {
  yield takeLatest(GET_MENU_REQUESTED, getMenu)
  yield takeLatest(SET_ACTIVE_CATEGORY_REQUESTED, setActiveCategory)
  yield takeLatest(SET_SELECTED_PLATE_REQUESTED, setSelectedPlate)
}

const GET_MENU_SUCCESS = 'GET_MENU_SUCCESS'
const GET_MENU_REQUESTED = 'GET_MENU_REQUESTED'
const SET_ACTIVE_CATEGORY_REQUESTED = 'SET_ACTIVE_CATEGORY_REQUESTED'
const SET_ACTIVE_CATEGORY_SUCCESS = 'SET_ACTIVE_CATEGORY_SUCCESS'
const SET_SELECTED_PLATE_REQUESTED = 'SET_SELECTED_PLATE_REQUESTED'
const SET_SELECTED_PLATE_SUCCESS = 'SET_SELECTED_PLATE_SUCCESS'
