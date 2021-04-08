/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
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

export const WeatherPage = ({ data }) => {
  console.log('weatherdata', data);
  return (
    <div>
      <Search>
        <SearchBar />
      </Search>
      <CustomCard>
        {data.currentConditions.length > 0 && (
          <div>
            <div>{data.currentConditions[0].WeatherText}</div>
            <div>{data.currentConditions[0].Temperature.Metric.Value}°</div>
            <div>{data.currentConditions[0].Wind.Speed.Metric.Value}</div>
            <div>{data.currentConditions[0].RelativeHumidity}</div>
          </div>
        )}
        {/* <Button
            icon="pi pi-star-o"
            className="p-button-rounded p-button-secondary p-button-outlined"
          /> */}
        {/* <Button
            icon="pi pi-star-o"
            className="p-button-rounded p-button-secondary"
          /> */}
        <FiveDayForecast />
      </CustomCard>
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps)(WeatherPage);
