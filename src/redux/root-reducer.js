import { combineReducers } from 'redux'
import countriesReducer from './countries/reducer'

const rootReducer = combineReducers({
  countriesState: countriesReducer,
})

export default rootReducer
