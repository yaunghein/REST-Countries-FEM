import { ACTION_TYPES } from './action-types'

const initialState = {
  countries: [],
  selectedCountry: {},
  relatedCountries: [],
  isLoading: true,
  hasError: null,
}

const countriesReducer = (prevState = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.GET_COUNTRIES_REQUEST:
    case ACTION_TYPES.GET_SELECTED_COUNTRY_REQUEST:
    case ACTION_TYPES.GET_RELATED_COUNTRIES_REQUEST:
      return { ...prevState, isLoading: true }
    case ACTION_TYPES.GET_COUNTRIES_FAILURE:
    case ACTION_TYPES.GET_SELECTED_COUNTRY_FAILURE:
    case ACTION_TYPES.GET_RELATED_COUNTRIES_FAILURE:
      return { ...prevState, isLoading: false, hasError: true }
    case ACTION_TYPES.GET_COUNTRIES_SUCCESS:
      return { ...prevState, isLoading: false, countries: payload }
    case ACTION_TYPES.GET_SELECTED_COUNTRY_SUCCESS:
      return { ...prevState, isLoading: false, selectedCountry: payload }
    case ACTION_TYPES.REMOVE_SELECTED_COUNTRY:
    case ACTION_TYPES.REMOVE_RELATED_COUNTRIES:
      return { ...prevState, selectedCountry: {}, relatedCountries: [] }
    case ACTION_TYPES.GET_RELATED_COUNTRIES_SUCCESS:
      return { ...prevState, isLoading: false, relatedCountries: payload }
    default:
      return prevState
  }
}

export default countriesReducer
