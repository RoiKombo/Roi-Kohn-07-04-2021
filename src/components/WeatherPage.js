/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import { Button } from 'primereact/button';
import { connect } from 'react-redux';
import { SelectButton } from 'primereact/selectbutton';
import SearchBar from './SearchBar';
import FiveDayForecast from './FiveDayForecast';
import useLocalStorage from '../hooks/useLocalStorage';
import { getWeather, getCurrentConditions } from '../actions/clientActions';
import { convertTempUnit } from '../utils';

const Search = Styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;
`;
const CustomCard = Styled.div`   
    display: flex;
    flex-direction: column;
    width: 80%;background: #ffffff;
    color: var(--black);
    box-shadow:  3px 3px 17px #e1e1e3, -3px -3px 17px #ffffff;
    border-radius: 15px;
    margin: 10px 0 0 0;
    padding: 23px;
    flex-grow: 1;
    margin: auto;
      @media (max-width: 400px){
        width: 100%;
      }
`;
const TopFlex = Styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;   
`;
const DisplayedCity = Styled.div`
  font-size: var(--heading-3);
  font-weight: 400;
`;
const DisplayedCityConditions = Styled.div`
    font-size: var(--heading-3);
`;
const SelectedConditions = Styled.div`
    text-align: center;
`;
const Devider = Styled.div`
    border-top: 1px solid #eee;
    margin: 1.5rem 0rem 1.5rem 0rem;
`;
const SideBySide = Styled.div`
  display: flex;
`;
const MyButton = Styled(Button)`
  margin-left: 15px;
`;

const WeatherPage = ({
  data,
  getWeather: getForecast,
  getCurrentConditions: getCurrent,
  currentCity,
}) => {
  const [favorites, setFavorites] = useLocalStorage('favorites', []);
  const [cityFavorite, setCityFavorite] = useState(false);

  const [unit, setUnit] = useState('°C');
  const unitOptions = ['°C', '°F'];

  useEffect(() => {
    if (currentCity === undefined) {
      if (navigator.geolocation) {
        getForecast(215854);
        getCurrent(215854, 'Tel Aviv');
      } else {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude } = position.coords;
          const { longitude } = position.coords;
        });
      }
    }
  }, [currentCity]);

  const makeFavorite = ({ cityName, key }) => {
    const city =
      favorites.length > 0
        ? favorites.filter((item) => {
            if (item.cityName === cityName) return item;
          })
        : [];
    if (city.length > 0) {
      // remove favorite city from local storage
      setCityFavorite(false);
      const newFav = favorites.reduce((arr, item) => {
        if (item.cityName !== cityName) {
          return [...arr, item];
        }
        return arr;
      }, []);
      setFavorites(newFav);
    } else {
      // add favorite city to local storage
      setCityFavorite(true);
      const favs = favorites.length > 0 ? favorites : [];
      setFavorites([...favs, { cityName, key }]);
    }
  };
  // Make button active / inactive according to local storage favorites
  useEffect(() => {
    const city =
      favorites.length > 0
        ? favorites.filter((item) => {
            if (item.cityName === currentCity) return item;
          })
        : [];
    city.length > 0 ? setCityFavorite(true) : setCityFavorite(false);
  }, [currentCity]);

  return (
    <div>
      <Search>
        <SearchBar />
      </Search>
      <CustomCard>
        {data.currentConditions.WeatherText && (
          <TopFlex>
            <DisplayedCity>{data.currentConditions.cityName}</DisplayedCity>
            <SelectedConditions>
              <DisplayedCityConditions>
                {data.currentConditions.WeatherText}
              </DisplayedCityConditions>
              <DisplayedCityConditions>
                {convertTempUnit(
                  unit === unitOptions[1],
                  data.currentConditions.Temperature.Metric.Value
                )}
                °
              </DisplayedCityConditions>
            </SelectedConditions>
            <SideBySide>
              <SelectButton
                value={unit}
                options={unitOptions}
                onChange={(e) => setUnit(e.value)}
              />
              <MyButton
                onClick={() => makeFavorite(data.currentConditions)}
                icon="pi pi-star-o"
                className={
                  !cityFavorite
                    ? 'p-button-rounded p-button-secondary p-button-outlined'
                    : 'p-button-rounded p-button-secondary'
                }
              />
            </SideBySide>
          </TopFlex>
        )}
        <Devider />
        <FiveDayForecast fahrenheit={unit === unitOptions[1]} />
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
