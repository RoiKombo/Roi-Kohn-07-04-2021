/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import Styled from 'styled-components';

const Search = Styled.div`
    display: flex;
    justify-content: center;
`;
const CityWeather = Styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    background-color: peachpuff;
`;
const TopFlex = Styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    background-color: peachpuff;
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
const DailyForeCast = Styled.div`
    display: flex;
    align-items: center;
    width: 100px;
    height: 100px;
    background-color: #d5ecc2
`;
const Dailys = Styled.div`
    display: flex;
    justify-content: space-around;
`;
const TodayWeather = Styled.h1`
    display: flex;
    justify-content: center;
`;

export default function WeatherPage() {
  return (
    <div>
      <Search>
        <input type="text" />
        <button type="button">SEARCH</button>
      </Search>
      <CityWeather>
        <TopFlex>
          <CityDetails>
            <CityImg />
            <p>Tel Aviv</p>
            <p>38c</p>
          </CityDetails>
          <FavBtn type="button">Favorite</FavBtn>
        </TopFlex>
        <TodayWeather>weatherForecast variable</TodayWeather>
        <Dailys>
          <DailyForeCast>38c</DailyForeCast>
          <DailyForeCast>38c</DailyForeCast>
          <DailyForeCast>38c</DailyForeCast>
          <DailyForeCast>38c</DailyForeCast>
          <DailyForeCast>38c</DailyForeCast>
        </Dailys>
      </CityWeather>
    </div>
  );
}
