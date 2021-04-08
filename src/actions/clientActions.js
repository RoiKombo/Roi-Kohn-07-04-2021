import { GET_WEATHER, SUGGESTIONS } from './types';

const API_KEY = '42jHPT6VXvQuFTMmkuAXRsR5TfoWlm0N';

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
    // `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${query}`
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
