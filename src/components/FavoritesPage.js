import React from 'react';
import Styled from 'styled-components';
import { connect } from 'react-redux';
import useLocalStorage from '../hooks/useLocalStorage';
import { getCurrentConditions } from '../actions/clientActions';

const FavCity = Styled.div`
    
    padding: 1.2rem;
    background-color: #d5ecc2;
    margin: 5px
`;
const Favorites = Styled.div`
    display: flex;
    justify-content: center;
`;

const FavoritesPage = () => {
  const [favorites, setFavorites] = useLocalStorage('favorites');
  console.log('favorites', favorites);
  const getFavCities = () => {};
  return (
    <div>
      <h1>
        This are my favorites, there are many favorites but these ones are mine
      </h1>
      <Favorites>
        {favorites.map((item) => (
          <FavCity>{item}</FavCity>
        ))}
      </Favorites>
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
  currentCity: state.data.currentConditions.cityName,
});

export default connect(mapStateToProps, {
  getCurrentConditions,
})(FavoritesPage);
