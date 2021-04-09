/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import { Button } from 'primereact/button';
import { connect } from 'react-redux';

import SearchBar from './SearchBar';
import FiveDayForecast from './FiveDayForecast';
import useLocalStorage from '../hooks/useLocalStorage';
import { getWeather, getCurrentConditions } from '../actions/clientActions';

const Search = Styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;
`;
const CustomCard = Styled.div`   
    display: flex;
    flex-direction: column;
    width: 80%;background: #ffffff;
    color: #495057;
    box-shadow:  3px 3px 17px #e1e1e3, -3px -3px 17px #ffffff;
    border-radius: 15px;
    margin: 0 0 30px 10px;
    padding: 23px;
    flex-grow: 1;
    margin: auto;
`;
const TopFlex = Styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;   
`;
const FavBtn = Styled.button`
     display: flex;
    justify-content: flex-end;
`;
const CityImg = Styled.img`
    width: 100px;
    height: 100px;
`;
const CityDetails = Styled.div`
    display: flex;
    justify-content: flex-start;
`;

const TodayWeather = Styled.h1`
    display: flex;
    justify-content: center;
`;

const WeatherPage = ({
  data,
  getWeather: getForecast,
  getCurrentConditions: getCurrent,
  currentCity,
}) => {
  console.log('current', currentCity);
  const [favorites, setFavorites] = useLocalStorage('favorites', []);
  const [cityFavorite, setCityFavorite] = useState(false);

  // >>> this use effect worked before with connect, now checked if could work with useSelect and usedispatch
  useEffect(() => {
    getForecast(215854);
    getCurrent(215854, 'Tel Aviv');
  }, []);

  const makeFavorite = (cityName) => {
    const indexCity = favorites.indexOf(cityName);
    console.log('index', indexCity, favorites);
    if (indexCity > -1) {
      setCityFavorite(false);
      favorites.splice(indexCity, 1);
      setFavorites(favorites);
    } else {
      setCityFavorite(true);
      setFavorites([...favorites, cityName]);
    }
  };

  useEffect(() => {
    const indexCity = favorites.indexOf(currentCity);
    indexCity > -1 ? setCityFavorite(true) : setCityFavorite(false);
  }, [currentCity]);
  // console.log('data.currentConditions', data.currentConditions);
  return (
    <div>
      <div>
        <SearchBar />
      </div>
      <CustomCard>
        {data.currentConditions.WeatherText && (
          <div>
            <div>{data.currentConditions.cityName}</div>
            <div>{data.currentConditions.WeatherText}</div>
            <div>{data.currentConditions.Temperature.Metric.Value}°</div>
          </div>
        )}

        <Button
          onClick={() => makeFavorite(data.currentConditions.cityName)}
          icon="pi pi-star-o"
          className={
            !cityFavorite
              ? 'p-button-rounded p-button-secondary p-button-outlined'
              : 'p-button-rounded p-button-secondary'
          }
        />

        <FiveDayForecast />
      </CustomCard>
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
  currentCity: state.data.currentConditions.cityName,
});

export default connect(mapStateToProps, {
  getWeather,
  getCurrentConditions,
})(WeatherPage);
