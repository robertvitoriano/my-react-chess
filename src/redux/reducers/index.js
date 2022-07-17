import { combineReducers } from 'redux'
import { movementsReducer } from './movementReducer'

export const Reducers = combineReducers({
  movementState: movementsReducer
})
