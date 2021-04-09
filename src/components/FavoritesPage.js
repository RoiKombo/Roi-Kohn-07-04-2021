/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import Styled from 'styled-components';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';
import {
  getFavoritesConditions,
  getWeather,
  getCurrentConditions,
} from '../actions/clientActions';

const FavCity = Styled.div`
    
    padding: 1.2rem;
    background-color: #d5ecc2;
    margin: 5px
`;
const Favorites = Styled.div`
    display: flex;
    justify-content: center;
`;

const FavoritesPage = ({
  getFavoritesConditions: getFavConditions,
  favoritesConditions,
  getWeather: getForecast,
  getCurrentConditions: getCurrent,
}) => {
  const [favorites, setFavorites] = useLocalStorage('favorites');
  console.log('favorites', favorites);
  const history = useHistory();

  useEffect(() => {
    getFavConditions(favorites);
  }, []);

  const convertCityName = (url) => {
    const noStart = url.slice(31);
    const index = noStart.indexOf('/');
    const cityKebab = noStart.slice(0, index);
    return cityKebab.replace('-', ' ');
  };
  console.log(
    'convertCityName',
    convertCityName(
      'http://m.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us'
    )
  );
  const goToMain = (url) => {
    const noStart = url.slice(63);
    const index = noStart.indexOf('?');
    const cityKey = noStart.slice(0, index);
    getForecast(cityKey);
    getCurrent(cityKey, convertCityName(url));
    history.push('/');
  };
  return (
    <div>
      <h1>
        This are my favorites, there are many favorites but these ones are mine
      </h1>
      <Favorites>
        {favoritesConditions.map((item, index) => (
          <FavCity onClick={() => goToMain(item[0].MobileLink)} key={index}>
            <div>{convertCityName(item[0].MobileLink)}</div>
            <div>{item[0].WeatherText}</div>
            <div>{item[0].Temperature.Metric.Value}°</div>
          </FavCity>
        ))}
      </Favorites>
    </div>
  );
};

const mapStateToProps = (state) => ({
  favoritesConditions: state.data.favoritesConditions,
  currentCity: state.data.currentConditions.cityName,
});

export default connect(mapStateToProps, {
  getFavoritesConditions,
  getWeather,
  getCurrentConditions,
})(FavoritesPage);
