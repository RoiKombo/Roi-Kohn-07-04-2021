import React from 'react';
import Styled from 'styled-components';
import { Button } from 'primereact/button';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import FiveDayForecast from './FiveDayForecast';

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

export const WeatherPage = () => (
  <div>
    <Search>
      <SearchBar />
    </Search>
    <CustomCard>
      <TopFlex>
        <CityDetails>
          <CityImg />
          <p>Tel Aviv</p>
          <p>38c</p>
        </CityDetails>
        <Button
          icon="pi pi-star-o"
          className="p-button-rounded p-button-secondary p-button-outlined"
        />
        {/* <Button
            icon="pi pi-star-o"
            className="p-button-rounded p-button-secondary"
          /> */}
      </TopFlex>
      <TodayWeather>weatherForecast variable</TodayWeather>
      <FiveDayForecast />
    </CustomCard>
  </div>
);

const mapStateToProps = (state) => ({
  data: state.data,
});
export default connect(mapStateToProps)(WeatherPage);
