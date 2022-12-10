import * as actionTypes from './page-navigation-types'

const INITIAL_STATE = {
    page:"HOME"
}

export const pageReducer = (state = INITIAL_STATE,action) => {
  switch(action.type){
    case actionTypes.GO_TO_PAGE:
    return{
      ...state,
      page:action.payload
    }
    default:
      return state
  }
}