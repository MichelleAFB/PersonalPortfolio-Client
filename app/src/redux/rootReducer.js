import {combineReducers} from 'redux'
import { pageReducer } from './page-navigation/page-navigation-reducer'

export const rootReducer = combineReducers({
  pageRedux:pageReducer
  
})