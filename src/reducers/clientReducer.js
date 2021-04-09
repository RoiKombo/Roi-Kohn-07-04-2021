import {
  GET_WEATHER,
  SUGGESTIONS,
  CURRENT_CONDITIONS,
  FAVORITES_CONDITIONS,
} from '../actions/types';

const initialState = {
  suggestions: [],
  weeklyForecast: {},
  currentConditions: {},
  favoritesConditions: [],
};
export default function (state = initialState, action) {
  switch (action.type) {
    case SUGGESTIONS:
      return {
        ...state,
        suggestions: action.payload,
      };
    case GET_WEATHER:
      return {
        ...state,
        weeklyForecast: action.payload,
      };
    case CURRENT_CONDITIONS:
      return {
        ...state,
        currentConditions: action.payload,
      };
    case FAVORITES_CONDITIONS:
      return {
        ...state,
        favoritesConditions: action.payload,
      };
    default:
      return state;
  }
}
