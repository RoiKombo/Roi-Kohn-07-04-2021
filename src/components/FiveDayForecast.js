/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import Styled from 'styled-components';
import moment from 'moment';

const DailyForeCast = Styled.div`
    padding: 1.2rem;
    margin: 5px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    border-radius: 10px;
    width: 180px;
    text-align: center;
      @media (max-width: 400px){
        width: 100%;
      }
`;
const Dailys = Styled.div`
    display: flex;
    justify-content: space-around;
      @media (max-width: 400px){
        flex-direction: column;
        justify-content: space-between;
      }
`;
const Day = Styled.div`
    font-size: var(--heading-4);
    font-weight: 400;
`;

const FiveDayForecast = ({ data }) => (
  <Dailys>
    {data?.weeklyForecast?.DailyForecasts?.map((forecast, index) => (
      <DailyForeCast key={index}>
        <Day>{moment(forecast.Date).format('dddd')}</Day>
        <p>{forecast.Day.IconPhrase}</p>
        <p>{forecast.Temperature.Minimum.Value}°</p>
        <p>{forecast.Temperature.Maximum.Value}°</p>
      </DailyForeCast>
    ))}
  </Dailys>
);

const mapStateToProps = (state) => ({
  data: state.data,
});
export default connect(mapStateToProps)(FiveDayForecast);
