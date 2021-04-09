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
    // `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${API_KEY}&metric=true`
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

export const getCurrentConditions = (cityKey, name) => (dispatch) => {
  console.log('getcurrent', cityKey, name);
  fetch(
    // `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${API_KEY}`
    'TelAvivCurrent.json'
  )
    .then((res) => res.json())
    .then((currentConditions) => {
      const currentConditionsPayload = currentConditions[0];
      dispatch({
        type: CURRENT_CONDITIONS,
        payload: {
          ...currentConditionsPayload,
          cityName: name,
          key: cityKey,
        },
      });
    });
};
