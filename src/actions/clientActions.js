import {
  GET_WEATHER,
  SUGGESTIONS,
  CURRENT_CONDITIONS,
  FAVORITES_CONDITIONS,
} from './types';

// > > > > > ADD API KEY HERE < < < < <
const API_KEY = '';
// > > > > >

export const getAutoComplete = (query) => (dispatch) => {
  fetch(
    `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${query}`
    // 'json/tSuggest.json'
  )
    .then((res) => res.json())
    .then((suggestions) =>
      dispatch({
        type: SUGGESTIONS,
        payload: suggestions,
      })
    )
    .catch((err) => console.log('faild to get autoComplete API'));
};

export const getWeather = (cityKey) => (dispatch) => {
  fetch(
    `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${API_KEY}&metric=true`
    // 'TelAvivWeather.json'
  )
    .then((res) => res.json())
    .then((weeklyForecast) =>
      dispatch({
        type: GET_WEATHER,
        payload: weeklyForecast,
      })
    )
    .catch((err) => console.log('faild to get 5 day foreCast'));
};

export const getCurrentConditions = (cityKey, name) => (dispatch) => {
  fetch(
    `https://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${API_KEY}`
    // 'TelAvivCurrent.json'
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
    })
    .catch((err) => console.log('faild to get current conditions'));
};

export const getFavoritesConditions = (favorites = []) => (dispatch) => {
  Promise.all(
    favorites.map((u) =>
      fetch(
        `https://dataservice.accuweather.com/currentconditions/v1/${u.key}?apikey=${API_KEY}`
        // 'TelAvivCurrent.json'
      )
    )
  )
    .then((responses) => Promise.all(responses.map((res) => res.json())))
    .then((FavoritesConditions) => {
      dispatch({
        type: FAVORITES_CONDITIONS,
        payload: FavoritesConditions,
      });
    })
    .catch((err) => console.log('faild to get favorite conditions'));
};
