import React from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';

const TopFlex = Styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:100%   
`;
const NavBar = Styled.div`
    width: 100%;
    display:flex;
    justify-content: space-between;
    box-shadow: 0 0 4px rgb(0 0 0 / 25%);
    border-bottom: 1px solid var(--surface-d);
`;
const NavBtns = Styled.div`
    justify-content: flex-end;
      @media (max-width: 400px){
        display: flex;
      }
`;
const NavTxt = Styled.div`
    display:flex;
    justify-content: flex-start;
    color: var(--black);
    font-size: var(--heading-2);
    font-weight:400;
    padding: 1rem;
      @media (max-width: 400px){
        font-size: var(--heading-3);
        padding: 1rem;
      }
`;
const MyBtn = Styled.div`
  display:inline-block;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  background-color:#FBC02D;
  border-radius: 5px;
  text-align: center;
    @media (max-width: 400px){
      display:inline-block;
      padding: 0.2rem 0.5rem;
      font-size: var(--heading-4);
    }
`;
const MyLink = Styled(Link)`
  text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export default function Header() {
  return (
    <NavBar>
      <TopFlex>
        <NavTxt>HEROLO weather</NavTxt>
        <NavBtns>
          <MyLink to="/">
            <MyBtn>HOME</MyBtn>
          </MyLink>
          <MyLink to="/favorites">
            <MyBtn>FAVORITES</MyBtn>
          </MyLink>
        </NavBtns>
      </TopFlex>
    </NavBar>
  );
}
