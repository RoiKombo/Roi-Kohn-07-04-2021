/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import Styled from 'styled-components';
import moment from 'moment';

const DailyForeCast = Styled.div`
    padding: 1.2rem;
    background-color: #d5ecc2;
    margin: 5px
    
`;
const Dailys = Styled.div`
    display: flex;
    justify-content: space-around;
`;

const FiveDayForecast = ({ data }) => {
  console.log('DailyForecasts', data);
  return (
    <Dailys>
      {data?.weeklyForecast?.DailyForecasts?.map((forecast, index) => (
        <DailyForeCast key={index}>
          {moment(forecast.Date).format('dddd')};
          <p>{forecast.Day.IconPhrase};</p>
          <p>{forecast.Temperature.Minimum.Value}°;</p>
          <p>{forecast.Temperature.Maximum.Value}°;</p>
        </DailyForeCast>
      ))}
    </Dailys>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
});
export default connect(mapStateToProps)(FiveDayForecast);
