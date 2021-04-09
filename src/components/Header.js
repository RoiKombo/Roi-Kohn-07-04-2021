import React from 'react';
import Styled from 'styled-components';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

const NavBar = Styled.div`
    width: 100vw;
    display:flex;
    justify-content: space-between;
    background-color: #553074;
`;
const NavBtn = Styled.button`
    display:flex;
    justify-content: flex-end;
`;
const NavTxt = Styled.div`
    display:flex;
    justify-content: flex-start;
    color: white;
`;

export default function Header() {
  return (
    <NavBar>
      <NavTxt>HEROLO weather task</NavTxt>
      <div>
        <Link to="/">
          <Button label="HOME" icon="pi pi-home" />
        </Link>
        <Link to="/favorites">
          <Button label="FAVORITES" icon="pi pi-star-o" />
        </Link>
      </div>
    </NavBar>
  );
}
