import { GET_WEATHER, SUGGESTIONS } from '../actions/types';

const initialState = {
  suggestions: [],
  weeklyForecast: {},
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
    default:
      return state;
  }
}
