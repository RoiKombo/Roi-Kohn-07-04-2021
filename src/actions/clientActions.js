import { GET_WEATHER, SUGGESTIONS, CURRENT_CONDITIONS } from './types';

const API_KEY = '42jHPT6VXvQuFTMmkuAXRsR5TfoWlm0N'; //  >>>>>> CHANGE TO ENV VARIABLE <<<<<

export const getAutoComplete = (query) => (dispatch) => {
  console.log('getAutoComplete', query);
  fetch(
    // `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${query}`
    'te.json'
  )
    .then((res) => res.json())
    .then((suggestions) =>
      dispatch({
        type: SUGGESTIONS,
        payload: suggestions,
      })
    );
};

export const getWeather = (cityKey) => (dispatch) => {
  console.log('getWeather', cityKey);
  fetch(
    // `http://dataservice.accuweather.com/forecasts/v1/daily/5day/?apikey=${API_KEY}&q=${query}`
    'TelAvivWeather.json'
  )
    .then((res) => res.json())
    .then((weeklyForecast) =>
      dispatch({
        type: GET_WEATHER,
        payload: weeklyForecast,
      })
    );
};

export const getCurrentConditions = (cityKey) => (dispatch) => {
  console.log('getcurrent', cityKey);
  fetch(
    // `http://dataservice.accuweather.com/currentconditions/v1/?apikey=${API_KEY}&q=${query}`
    'TelAvivCurrent.json'
  )
    .then((res) => res.json())
    .then((currentConditions) =>
      dispatch({
        type: CURRENT_CONDITIONS,
        payload: currentConditions,
      })
    );
};
