import { ACTION_TYPES } from './action-types'
import axios from 'axios'

export const getCountries = () => {
  return (dispatch, getState) => {
    const globalState = getState()
    if (!globalState.countriesState.countries.length > 0) {
      dispatch({ type: ACTION_TYPES.GET_COUNTRIES_REQUEST })
    }
    axios
      .get('https://restcountries.com/v2/all')
      .then(resp => {
        dispatch({
          type: ACTION_TYPES.GET_COUNTRIES_SUCCESS,
          payload: resp.data.map((item, index) => ({ id: index + 1, ...item })),
        })
      })
      .catch(() => {
        dispatch({ type: ACTION_TYPES.GET_COUNTRIES_FAILURE })
      })
  }
}

export const getSelectedCountry = country => {
  return dispatch => {
    dispatch({ type: ACTION_TYPES.GET_SELECTED_COUNTRY_REQUEST })
    axios
      .get(`https://restcountries.com/v2/name/${country}`)
      .then(resp => {
        dispatch({
          type: ACTION_TYPES.GET_SELECTED_COUNTRY_SUCCESS,
          payload: resp.data[0],
        })
      })
      .catch(() => {
        dispatch({ type: ACTION_TYPES.GET_SELECTED_COUNTRY_FAILURE })
      })
  }
}

export const removeSelectedCountry = () => {
  return {
    type: ACTION_TYPES.REMOVE_SELECTED_COUNTRY,
  }
}
