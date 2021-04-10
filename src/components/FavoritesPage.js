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
    margin: 15px;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    text-align: center;
    
    @media (max-width: 400px){
        display:flex;
        justify-content:space-between;

    }
    :hover {
        box-shadow: 0 14px 18px rgba(0,0,0,0.15), 0 5px 5px rgba(0,0,0,0.12);
        border-radius: 5px;
     @media (max-width: 400px){
        display:flex;
        justify-content:space-between;

    }
}

`;
const Favorites = Styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    @media (max-width: 400px){
        display: flex;
        flex-direction: column;
    }
`;
const Heading = Styled.div`
    text-align: center;
    font-size:var(--heading-2)
`;
const CityName = Styled.div`
    font-weight: 400;
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
      <Heading>
        These are my favorites, There are many favorites like it but these are
        mine
      </Heading>
      <Favorites>
        {favoritesConditions.map((item, index) => (
          <FavCity onClick={() => goToMain(item[0].MobileLink)} key={index}>
            <CityName>{convertCityName(item[0].MobileLink)}</CityName>
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
