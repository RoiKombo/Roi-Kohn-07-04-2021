import React from 'react';
import Styled from 'styled-components';
import { Button } from 'primereact/button';

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
        <Button label="HOME" icon="pi pi-home" />
        <Button label="FAVORITES" icon="pi pi-star-o" />
      </div>
    </NavBar>
  );
}
