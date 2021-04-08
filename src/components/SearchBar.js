/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import { AutoComplete } from 'primereact/autocomplete';
import { connect } from 'react-redux';
import { getAutoComplete, getWeather } from '../actions/clientActions';

const Search = Styled.div`
    display: flex;
    justify-content: center;
`;

const SearchBar = ({
  data,
  getAutoComplete: getCities,
  getWeather: getForecast,
}) => {
  const [inputCity, setinputCity] = useState();
  const { suggestions = [] } = data;
  const searchCity = () => {
    getCities(inputCity);
  };
  useEffect(() => {
    console.log('inputCity', inputCity);
    const checkCityName = suggestions.filter(
      (city) => city.LocalizedName === inputCity.value
    );
    console.log(checkCityName);
    checkCityName.length > 0 && getForecast(checkCityName[0].key);
  }, [inputCity]);
  const displayCities = suggestions.map((city) => ({
    label: city.LocalizedName,
    value: city.LocalizedName,
  }));
  const setFields = (e) => {
    console.log(e);

    setinputCity(e.value);
  };
  console.log('suggestions', suggestions);
  console.log('displayCities', displayCities);
  return (
    <Search>
      <AutoComplete
        value={inputCity}
        suggestions={displayCities}
        field="value"
        onChange={(e) => setFields(e)}
        completeMethod={searchCity}
      />
    </Search>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { getAutoComplete, getWeather })(
  SearchBar
);
