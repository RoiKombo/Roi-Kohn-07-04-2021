/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import { AutoComplete } from 'primereact/autocomplete';
import { connect } from 'react-redux';
import {
  getAutoComplete,
  getWeather,
  getCurrentConditions,
} from '../actions/clientActions';

const Search = Styled.div`
    display: flex;
    justify-content: center;
`;

const SearchBar = ({
  data,
  getAutoComplete: getCities,
  getWeather: getForecast,
  getCurrentConditions: getCurrent,
}) => {
  const [inputCity, setinputCity] = useState();
  const { suggestions = [] } = data;

  const searchCity = () => {
    inputCity.length > 0 && getCities(inputCity);
  };

  useEffect(() => {
    // console.log('inputCity', inputCity);
    const checkCityName = suggestions.filter(
      (city) => city.LocalizedName === inputCity.value
    );
    console.log('checkCityName', checkCityName);
    checkCityName.length > 0 && getForecast(checkCityName[0].Key);
    checkCityName.length > 0 && getCurrent(checkCityName[0].Key);
  }, [inputCity]);

  const displayCities = suggestions.map((city) => ({
    label: city.LocalizedName,
    value: city.LocalizedName,
  }));

  const checkEnglishInput = ({ value }) => {
    const englishOnlyRegex = /(^$|^[a-zA-Z ]+$)/;
    console.log(value);
    englishOnlyRegex.test(value)
      ? setinputCity(value)
      : console.log('search accepts english letters only');
  };
  //   console.log('suggestions', suggestions);
  //   console.log('displayCities', displayCities);
  return (
    <Search>
      <AutoComplete
        value={inputCity}
        suggestions={displayCities}
        field="value"
        onChange={(e) => setinputCity(e.value)}
        completeMethod={searchCity}
      />
    </Search>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, {
  getAutoComplete,
  getWeather,
  getCurrentConditions,
})(SearchBar);
